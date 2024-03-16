'use client'

import React, { useEffect, useState } from 'react'
import css from './serviceDetail.module.scss'
import cx from 'classnames'
import Image from 'next/image'
import ServiceBenefits from '@/components/Shared/ServiceBenefits/ServiceBenefits'
import { paintProtectionFilmData, windowTintServices } from '@/mock/services'
import Specifications from '../Shared/Specifications/Specifications'
import RecentWorks from '../Shared/RecentWorks/RecentWorks'
import GetStarted from '../Shared/GetStarted/GetStarted'
import Select from 'react-select'
import { customStyles3 } from '../Shared/react-select-custom-styles'

const packageOptions = [
    { value: 'DYNO Shield Front', label: 'DYNO Shield Front' },
    { value: 'DYNO Shield Track Pack', label: 'DYNO Shield Track Pack' },
    { value: 'DYNO Shield Fully Body', label: 'DYNO Shield Fully Body' },
    { value: 'Fashion Film / DYNOmight / DYNOmate', label: 'Fashion Film / DYNOmight / DYNOmate' },
]

const ServiceDetails = ({ serviceName }) => {
    const [selectedPackage, setSelectedPackage] = useState(packageOptions[0].value);
    const [filteredPackage, setFilteredPackage] = useState(null);

    const getSelectedPackage = (services, selectedPackage) => {
        let filteredPackage = services;

        if (selectedPackage !== '') {
            filteredPackage = filteredPackage.filter((_package) =>
                _package.package.toLowerCase() === selectedPackage.toLowerCase()
            );
        }

        return filteredPackage.length > 0 ? filteredPackage[0] : null;
    };

    useEffect(() => {
        setFilteredPackage(getSelectedPackage(paintProtectionFilmData, selectedPackage));
    }, [selectedPackage]);
    console.log('selectedPackage', selectedPackage);
    console.log('filteredPackage', filteredPackage);
    return (
        <div className={css.service_details_container}>
            <h2 className={cx("typoH2", "text_gradient", css.heading)}>
                PAINT PROTECTION FILM
            </h2>
            <p className={cx("typoBody1", css.description, css.hero_description)}>
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
                <Select
                    options={packageOptions}
                    isSearchable={false}
                    defaultValue={packageOptions[0]}
                    styles={customStyles3}
                    onChange={(option) => setSelectedPackage(option.value)}
                />
            </div>
            <ServiceBenefits benefits={filteredPackage?.benefits} befitsDescription={filteredPackage?.befitsDescription} />
            <p className={cx("typoBody1", css.description)} style={{ marginTop: '6rem' }}>
                {filteredPackage?.description}
            </p>

            <Specifications />
            <RecentWorks />
            <GetStarted />
        </div>
    )
}

export default ServiceDetails