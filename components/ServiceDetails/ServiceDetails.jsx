'use client'

import React from 'react'
import css from './serviceDetails.module.scss'
import cx from 'classnames'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SectionHeading, SectionHeadingLarge } from '@/components/Shared/SectionHeading/SectionHeading'
import { CustomNextArrow, CustomPrevArrow } from '@/components/Shared/SliderCustomArrows/SliderCustomArrows';
import { urlFor } from '@/lib/client';
import Image from 'next/image';
import Iconify from '@/components/iconify/iconify';
import Link from 'next/link';
import GetStarted from '@/components/Shared/GetStarted/GetStarted';

const ServiceDetails = ({ data }) => {
    const settings = {
        dots: true,
        dotsClass: "dots-style1",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow testimonials />,
        prevArrow: <CustomPrevArrow testimonials />,
    };
    const { serviceTitle, description, serviceImages, details, assets } = data
    return (
        <>
            <div className={css.service_details_container}>
                <div className={css.service_details_left}>
                    <SectionHeading extraStyles={css.service_title}>
                        {serviceTitle}
                    </SectionHeading>
                    <p className={cx("typoBody1", css.description)}>
                        {description}
                    </p>
                    <div className={css.service_images}>
                        <div className={css.ellipse} />
                        {serviceImages.length > 1 ? (
                            <div className={css.slider_container}>
                                <Slider {...settings} className={css.slider}>
                                    {serviceImages.map((item, ind) => {
                                        return (
                                            <div className={css.slide} key={ind}>
                                                <div className={css.card_img_container}>
                                                    <Image
                                                        src={urlFor(item).url()}
                                                        // src={item}
                                                        alt={item.serviceTitle}
                                                        fill
                                                        quality={100}
                                                        priority={true}
                                                        sizes="(max-width: 900px) 100vw, 45vw"
                                                        className={css.card_img}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>
                        ) : (
                            <div className={css.card_img_container}>
                                <Image
                                    src={urlFor(serviceImages[0]).url()}
                                    // src={item}
                                    alt={serviceImages[0].serviceTitle}
                                    fill
                                    quality={100}
                                    priority={true}
                                    sizes="(max-width: 900px) 100vw, 45vw"
                                    className={css.card_img}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className={css.service_details_right}>
                    <div className={cx(css.service_details_wrapper, details && details.length > 3 && css.service_details_scrollable)}>
                        <div className={css.service_details}>
                            {details && details.length > 0 && details.map((item, ind) => {
                                return (
                                    <div className={css.service_detail} key={ind}>
                                        <div className={css.service_detail_row1}>
                                            <div className={css.service_detail_icon}>
                                                <Image
                                                    src={urlFor(item.icon).url()}
                                                    // src={item.iconImage}
                                                    alt='icon'
                                                    width={50}
                                                    height={50}
                                                    quality={100}
                                                    priority={true}
                                                />
                                            </div>
                                            <h4 className={cx("typoH4", css.service_detail_heading)}>
                                                {item.detailTitle}
                                            </h4>
                                        </div>
                                        <p className={cx("typoBody2", css.service_detail_description)}>
                                            {item.detailDescription}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {assets && Object.keys(assets).length > 0 && (
                        <div className={css.assets}>
                            <h4 className={cx("typoH4", css.assets_heading)}>
                                {assets.assetsTitle}
                            </h4>
                            <p className={cx("typoBody2", css.assets_description)}>
                                {assets.assetsDescription}
                            </p>
                            <div className={css.assets_btns}>
                                {assets.assetsURLs.map((url, index) => {
                                    const fileType = url.split('.').pop();
                                    let icon = "ph:file";
                                    if (fileType === 'xls' || fileType === 'xlsx') {
                                        icon = "healthicons:spreadsheets-outline";
                                    } else if (fileType === 'doc' || fileType === 'docx') {
                                        icon = "vscode-icons:file-type-word";
                                    } else if (fileType === 'pdf') {
                                        icon = "vscode-icons:file-type-pdf2";
                                    }
                                    return (
                                        <Link className={css.assets_btn} href={url} target='_blank' key={index}>
                                            <Iconify
                                                icon={icon}
                                                width={30}
                                                color='white'
                                            />
                                            View Data
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <GetStarted />
        </>
    )
}

export default ServiceDetails