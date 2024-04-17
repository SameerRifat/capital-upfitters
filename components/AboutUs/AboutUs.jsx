import React from 'react';
import css from './aboutUs.module.scss';
import cx from 'classnames';
import Iconify from '@/components/iconify/iconify';
import Testimonials from '@/components/Shared/Testimonials/Testimonials';
// import GetStarted from '@/components/GetStarted/GetStarted';
import GetStarted from '@/components/Shared/GetStarted/GetStarted';
import { getTestimonials } from '@/apis/testimonial';
import { getAboutUsData } from '@/apis/settings';
import Image from 'next/image';
import { urlFor } from '@/lib/client';
import { SectionHeadingLarge } from '@/components/Shared/SectionHeading/SectionHeading';

const iconData = [
    { icon: 'ph:medal-fill', text: 'Quality' },
    { icon: 'mdi:star', text: 'Efficient' },
    { icon: 'mdi:idea', text: 'Innovation' },
    { icon: 'mdi:thumb-up', text: 'Experience' }
];

const AboutUs = async () => {
    let testimonialsData = []
    let testimonialsError = null
    try {
        testimonialsData = await getTestimonials();
    } catch (error) {
        console.error('Error fetching data:', error);
        testimonialsError = <div className='error_message'>Error fetching data. Please try again later.</div>;
    }
    let aboutUsData
    let aboutUsError = null
    try {
        aboutUsData = await getAboutUsData();
    } catch (error) {
        console.error('Error fetching data:', error);
        aboutUsError = <div className='error_message'>Error fetching data. Please try again later.</div>;
    }
    return (
        <>
            <div className={css.about_us_container}>
                <div className={css.about_us}>
                    <SectionHeadingLarge>About Us</SectionHeadingLarge>
                    <div className={css.image_container}>
                        <Image
                            src={urlFor(aboutUsData?.image).url()}
                            alt='team'
                            width={612}
                            height={183}
                            priority
                            quality={100}
                            className={css.img}
                        />
                    </div>
                    {aboutUsError ? (
                        aboutUsError
                    ) : (
                        aboutUsData && (
                            <p className={cx("typoBody1", css.description)}>
                                {aboutUsData?.description1}
                            </p>
                        )
                    )}
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
                        {aboutUsData?.description2}
                    </p>
                </div>
                {testimonialsError ? (
                    testimonialsError
                ) : (
                    testimonialsData.length > 0 && (
                        <div className={css.testimonials}>
                            <Testimonials testimonialsData={testimonialsData} />
                        </div>
                    )
                )}
                <GetStarted />
            </div>
        </>
    );
};

export default AboutUs;