'use client'

import React, { useEffect, useState } from 'react'
import css from './paintProtectionFilmPackages.module.scss'
import cx from 'classnames'
import Image from 'next/image'
import ServiceBenefits from '@/components/Shared/ServiceBenefits/ServiceBenefits'
import Select from 'react-select'
import { generateCustomStyles } from '@/components/Shared/react-select-custom-styles'
import { urlFor } from '@/lib/client'
import { motion } from "framer-motion"

const PaintProtectionFilmPackages = ({ data }) => {
    const packageOptions = data.map((item) => {
        return { value: item.package, label: item.package }
    })
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
                <div className={css.service_img_container} key={selectedPackage}>
                    {filteredPackage ? (
                        <>
                            <motion.div
                                initial={{opacity: 0, x: 100}}
                                animate={{x: 0, opacity: 1}}
                                transition={{duration: 0.8, ease: 'easeOut'}}
                                className={css.service_img}
                            >
                                <Image
                                    src={urlFor(filteredPackage.packageImage).url()}
                                    alt='image'
                                    fill
                                    quality={100}
                                    priority={true}
                                />
                            </motion.div>
                        </>
                    ) : (
                        <div className={css.service_img}>
                        </div>
                    )}
                </div>
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
        </div>
    )
}

export default PaintProtectionFilmPackages