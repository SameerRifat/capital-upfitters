'use client'

import React, { useEffect, useState } from 'react'
import css from './windowTint.module.scss'
import cx from 'classnames'
import Image from 'next/image'
import Select from 'react-select'
import { customStyles, customStyles2 } from './react-select-custom-styles'
import { windowTintServiceOptions, windowTintServices } from '@/mock/services'
import Iconify from "@/components/iconify/iconify";
import GetStarted from '../Shared/GetStarted/GetStarted'

const WindowTint = () => {
    const [vehicleType, setVihicleType] = useState(windowTintServiceOptions.vehicleType[0].value || "");
    const [tintType, setTinType] = useState(windowTintServiceOptions.tintType[0].value || "");

    const [selectedService, setSelectedService] = useState(null);

    const getSelectedService = (services, vehicleType, tintType) => {
        let filteredService = services;

        if (vehicleType !== '') {
            filteredService = filteredService.filter((_service) =>
                _service.vehicleType.toLowerCase() === vehicleType.toLowerCase()
            );
        }
        if (tintType !== '') {
            filteredService = filteredService.filter((_service) =>
                _service.tintType.toLowerCase() === tintType.toLowerCase()
            );
        }

        return filteredService.length > 0 ? filteredService[0] : null;
    };

    useEffect(() => {
        setSelectedService(getSelectedService(windowTintServices, vehicleType, tintType));
    }, [vehicleType, tintType]);

    return (
        <>
            <div className={css.service_detail_container}>
                <div className={css.serive_hero}>
                    <h1 className={cx("typoH1", css.hero_bg_title)}>WINDOW TINT</h1>
                    <h2 className={cx("typoH2", css.hero_title)}>
                        <span className={cx("text_gradient_blue")}>SUPERIOR</span> {" "}
                        <span className='text_gradient'>WINDOW TINT</span>
                    </h2>
                    <img
                        src='/service-detail-bg-svg.svg'
                        alt='image'
                        className={css.svg_img}
                    />
                    <div className={css.service_img_container}>
                        <Image
                            src={selectedService?.imageSrc}
                            alt='image'
                            fill
                            quality={100}
                            priority={true}
                            className={css.service_img}
                        />
                    </div>
                </div>
                <div className={css.service_options}>
                    <div className={css.dropdown_wrapper}>
                        <label className={cx("typoBody2", "boder_gradient_bottom", css.label)}>Vehilcle Type</label>
                        <Select
                            options={windowTintServiceOptions.vehicleType}
                            isSearchable={false}
                            defaultValue={windowTintServiceOptions.vehicleType[0]}
                            onChange={(option) => setVihicleType(option.value)}
                            styles={customStyles2}
                        />
                    </div>
                    <div className={css.dropdown_wrapper}>
                        <label className={cx("typoBody2", "boder_gradient_bottom", css.label)}>Titnt Type</label>
                        <Select
                            options={windowTintServiceOptions.tintType}
                            isSearchable={false}
                            defaultValue={windowTintServiceOptions.tintType[0]}
                            onChange={(option) => setTinType(option.value)}
                            styles={customStyles}
                        />
                    </div>
                    <h2 className={cx("typoH2", css.service_charges)}>
                        <span className={cx("text_gradient")}>{selectedService?.charges}</span>
                        <span className={cx("text_gradient_blue")}>$</span>
                    </h2>
                </div>
                <div className={css.horizontal_divider}>
                    <img
                        src='/window-tint-divider3.png'
                        alt='image'
                    />
                </div>
                <div className={css.service_benefits_wrapper}>
                    <h3 className={cx("typoH3", "text_gradient")}>
                        What you gets
                    </h3>
                    <div className={css.benefits}>
                        <div className={css.benefits_left}>
                            {selectedService?.benefits.map((item, ind) => (
                                <div key={ind}>
                                    <span className={css.check_icon}>
                                        <Iconify
                                            icon="mdi:tick"
                                        />
                                    </span>
                                    <p className={cx("typoBody2", css.benefit)} key={ind}>
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className={css.gradient_divider} />
                        <div className={css.benefits_right}>
                            <p className={cx("typoBody1", css.service_description)}>
                                {selectedService?.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div >
            <GetStarted />
        </>
    )
}

export default WindowTint