'use client'

import React, { useEffect, useState } from 'react'
import css from './paintProtectionFilm.module.scss'
import cx from 'classnames'
import Image from 'next/image'
import ServiceBenefits from '@/components/Shared/ServiceBenefits/ServiceBenefits'
import { paintProtectionFilmData, windowTintServices } from '@/mock/services'
import Specifications from '../Shared/Specifications/Specifications'
import RecentWorks from '../Shared/RecentWorks/RecentWorks'
import GetStarted from '../Shared/GetStarted/GetStarted'
import Select from 'react-select'
import { generateCustomStyles } from '../Shared/react-select-custom-styles'
import { urlFor } from '@/lib/client'
// import { customStyles3 } from '../Shared/react-select-custom-styles'

// const packageOptions = [
//     { value: 'DYNO Shield Front', label: 'DYNO Shield Front' },
//     { value: 'DYNO Shield Track Pack', label: 'DYNO Shield Track Pack' },
//     { value: 'DYNO Shield Fully Body', label: 'DYNO Shield Fully Body' },
//     { value: 'Fashion Film / DYNOmight / DYNOmate', label: 'Fashion Film / DYNOmight / DYNOmate' },
// ]

const PaintProtectionFilm = ({ data, specifications }) => {
    const packageOptions = data.map((item) => {
        return { value: item.package, label: item.package }
    })
    // console.log('packageOptions2: ', packageOptions2)
    const [selectedPackage, setSelectedPackage] = useState(packageOptions[0].value);
    const [filteredPackage, setFilteredPackage] = useState(null);

    const getSelectedPackage = (packagesData, selectedPackage) => {
        let filteredPackage = packagesData;

        if (selectedPackage !== '') {
            filteredPackage = filteredPackage.filter((_package) =>
                _package.package.toLowerCase() === selectedPackage.toLowerCase()
            );
        }

        return filteredPackage.length > 0 ? filteredPackage[0] : null;
    };

    useEffect(() => {
        setFilteredPackage(getSelectedPackage(data, selectedPackage));
    }, [selectedPackage]);
    console.log('data: ', data)
    console.log('filteredPackage: ', filteredPackage)
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
                    {filteredPackage ? (
                        <Image
                            src={urlFor(filteredPackage.packageImage).url()}
                            alt='image'
                            fill
                            quality={100}
                            priority={true}
                            className={css.service_img}
                        />
                    ) : (
                        <div className={css.placeholder}>
                            <div
                                className={css.empty_frame}
                                style={{
                                    width: '100%', // Set the width to match the image container
                                    paddingBottom: '66.66%', // For a 3:2 aspect ratio (2 / 3 = 0.6666), adjust as needed
                                }}
                            />
                        </div>
                    )}
                </div>
                {/* {filteredPackage && (
                    <div className={css.service_img_container}>
                        <Image
                            src={urlFor(filteredPackage.packageImage).url()}
                            alt='image'
                            fill
                            quality={100}
                            priority={true}
                            className={css.service_img}
                        />
                    </div>
                )} */}
            </div>
            <div className={css.select_your_service}>
                <p className={cx("typoBody2")}>Select your package</p>
                <Select
                    options={packageOptions}
                    isSearchable={false}
                    defaultValue={packageOptions[0]}
                    styles={generateCustomStyles('180px')}
                    onChange={(option) => setSelectedPackage(option.value)}
                />
            </div>
            <ServiceBenefits benefits={filteredPackage?.benefits} befitsDescription={filteredPackage?.benefitsDescription} />
            <p className={cx("typoBody1", css.description)} style={{ marginTop: '6rem' }}>
                {filteredPackage?.packageDescription}
            </p>

            <Specifications specifications={specifications}/>
            <RecentWorks />
            <GetStarted />
        </div>
    )
}

export default PaintProtectionFilm