import React from 'react';
import css from './aboutUs.module.scss';
import cx from 'classnames';
import Iconify from '@/components/iconify/iconify';
import Testimonials from '../Shared/Testimonials/Testimonials';
import GetStarted from '../Shared/GetStarted/GetStarted';
import SectionHeading from '../Shared/SectionHeading/SectionHeading';
import { getTestimonials } from '@/apis/testimonial';

const iconData = [
    { icon: 'ph:medal-fill', text: 'Quality' },
    { icon: 'mdi:star', text: 'Efficient' },
    { icon: 'mdi:idea', text: 'Innovation' },
    { icon: 'mdi:thumb-up', text: 'Experience' }
];

const AboutUs = async () => {
    let data = []
    let error = null
    try {
        data = await getTestimonials();
    } catch (error) {
        console.error('Error fetching data:', error);
        error = <div className='error_message'>Error fetching data. Please try again later.</div>;
    }
    return (
        <>
            <div className={css.about_us_container}>
                <div className={css.about_us}>
                    <SectionHeading>About Us</SectionHeading>
                    <p className={cx("typoBody1", css.description)}>
                        Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.
                    </p>
                    <div className={css.icons}>
                        {iconData.map((item, index) => (
                            <div key={index}>
                                <Iconify
                                    icon={item.icon}
                                    width={60}
                                />
                                <h4 className={cx("typoH4", css.icon_heading)}>
                                    {item.text}
                                </h4>
                            </div>
                        ))}
                    </div>
                    <p className={cx("typoBody1", css.description)}>
                        We're not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.
                    </p>
                </div>
                {error ? (
                    error
                ) : (
                    data.length > 0 && (
                        <div className={css.testimonials}>
                            <Testimonials testimonialsData={data}/>
                        </div>
                    )
                )}
                <GetStarted />
            </div>
        </>
    );
};

export default AboutUs;