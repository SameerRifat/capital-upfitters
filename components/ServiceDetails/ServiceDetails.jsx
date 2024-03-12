import React from 'react'
import css from './serviceDetail.module.scss'
import cx from 'classnames'
import Image from 'next/image'
import ServiceBenefits from '@/components/Shared/ServiceBenefits/ServiceBenefits'
import { windowTintServices } from '@/mock/services'
import Specifications from './Specifications/Specifications'
import RecentWorks from './RecentWorks/RecentWorks'
import GetStarted from '../Shared/GetStarted/GetStarted'

const ServiceDetails = ({ serviceName }) => {
    return (
        <div className={css.service_details_container}>
            <h2 className={cx("typoH2", "text_gradient", css.heading)}>
                PAINT PROTECTION FILM
            </h2>
            <p className={cx("typoBody1", css.description)}>
                Paint Protection Film, also known as clear bra, is an ultra-thin, nearly invisible urethane layer skillfully designed to adhere to your vehicle's exterior, delivering extensive protection against potential damage. This strong and long-lasting material is professionally applied to the painted surfaces of your car, serving as a shield to keep your vehicle safe from unsightly scratches, chips, and scuffs.
            </p>
            <div className={css.hero_image}>
                <img
                    src='/service-detail-bg-svg.svg'
                    alt='image'
                    className={css.svg_img}
                />
                <div className={css.service_img_container}>
                    <Image
                        src='/service-detail2.png'
                        alt='image'
                        fill
                        quality={100}
                        priority={true}
                        className={css.service_img}
                    />
                </div>
            </div>
            <div className={css.select_your_service}>
                <p className={cx("typoBody2")}>Select your package</p>
                <p className={cx("typoBody1")}>DYNO Shield Front</p>
            </div>
            <ServiceBenefits benefits={windowTintServices[0].benefits} benefitsDescrption={windowTintServices[0].description} />
            <p className={cx("typoBody1", css.description)} style={{marginTop: '6rem'}}>
                Welcome to the pinnacle of vehicle protection with our Full Front Package. Designed for those who demand comprehensive, state-of-the-art protection for their vehicle’s most vulnerable areas, this package is a high-quality solution that ensures your vehicle stays pristine, regardless of the road conditions.
            </p>

            <Specifications />
            <RecentWorks />
            <GetStarted />
        </div>
    )
}

export default ServiceDetails