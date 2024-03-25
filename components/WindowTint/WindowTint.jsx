'use client'

import React, { useEffect, useState } from 'react'
import css from './windowTint.module.scss'
import cx from 'classnames'
import Image from 'next/image'
import Select from 'react-select'
import { windowTintServiceOptions, windowTintServices } from '@/mock/services'
import GetStarted from '@/components/Shared/GetStarted/GetStarted'
import ServiceBenefits from '@/components/Shared/ServiceBenefits/ServiceBenefits'
import Specifications from '../Shared/Specifications/Specifications'
import RecentWorks from '../Shared/RecentWorks/RecentWorks'
import { generateCustomStyles } from '../Shared/react-select-custom-styles'
import { urlFor } from '@/lib/client'

const WindowTint = ({ data, vehicleTypes, specifications }) => {
    const vehicleTypesOptions = vehicleTypes.map((item) => {
        return { value: item.vehicleName, label: item.vehicleName }
    })
    const [vehicleType, setVihicleType] = useState(vehicleTypesOptions[0].value || "");
    const [tintType, setTinType] = useState(windowTintServiceOptions.tintType[0].value || "");

    const [selectedService, setSelectedService] = useState(null);

    const getSelectedService = (services, vehicleType, tintType) => {
        let filteredService = services;

        if (vehicleType !== '') {
            filteredService = filteredService.filter((_service) =>
                _service.vehicleType.vehicleName.toLowerCase() === vehicleType.toLowerCase()
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
        setSelectedService(getSelectedService(data, vehicleType, tintType));
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
                        {selectedService ? (
                            <Image
                                src={urlFor(selectedService.vehicleImage).url()}
                                alt='image'
                                fill
                                quality={100}
                                priority={true}
                                className={css.service_img}
                            />
                        ) : (
                            <div className={css.service_img}>
                                {/* <div
                                    className={css.empty_frame}
                                    style={{
                                        width: '100%', 
                                        paddingBottom: '66.66%',  
                                    }}
                                /> */}
                            </div>
                        )}
                        {/* <Image
                            src={selectedService?.imageSrc}
                            alt='image'
                            fill
                            quality={100}
                            priority={true}
                            className={css.service_img}
                        /> */}
                    </div>
                </div>
                <div className={css.service_options}>
                    <div className={css.dropdown_wrapper}>
                        <label className={cx("typoBody2", "boder_gradient_bottom", css.label)}>Vehilcle Type</label>
                        <Select
                            options={vehicleTypesOptions}
                            isSearchable={false}
                            defaultValue={vehicleTypesOptions[0]}
                            onChange={(option) => setVihicleType(option.value)}
                            styles={generateCustomStyles('100px')}
                        />
                    </div>
                    <div className={css.dropdown_wrapper}>
                        <label className={cx("typoBody2", "boder_gradient_bottom", css.label)}>Titnt Type</label>
                        <Select
                            options={windowTintServiceOptions.tintType}
                            isSearchable={false}
                            defaultValue={windowTintServiceOptions.tintType[0]}
                            onChange={(option) => setTinType(option.value)}
                            styles={generateCustomStyles('95px')}
                        />
                    </div>
                    <h2 className={cx("typoH2", css.service_charges)}>
                        <span className={cx("text_gradient")}>{selectedService?.charges}</span>
                        <span className={cx("text_gradient_blue")}>$</span>
                    </h2>
                </div>
                <ServiceBenefits benefits={selectedService?.benefits} befitsDescription={selectedService?.benefitsDescription} />
            </div >
            <div>
                <Specifications specifications={specifications}/>
            </div>
            <RecentWorks />
            <GetStarted />
        </>
    )
}

export default WindowTint