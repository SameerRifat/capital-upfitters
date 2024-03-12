'use client'

import React from 'react'
import css from './specifications.module.scss'
import cx from 'classnames'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from '@/components/Shared/SliderCustomArrows/SliderCustomArrows'
import Image from 'next/image';

const specificationsData = [
    {
        imgSrc: '/specification1.png',
        title: 'STEK DYNO shield',
        description: 'Ultra glossy hydrophobic, self healing and puncture resistant clear bra'
    },
    {
        imgSrc: '/specification1.png',
        title: 'STEK DYNO might',
        description: 'Ultra glossy hydrophobic, self healing and puncture resistant clear bra Ultra glossy hydrophobic, self healing and puncture resistant clear bra'
    },
    {
        imgSrc: '/specification1.png',
        title: 'STEK DYNO matte',
        description: 'Ultra glossy hydrophobic, self healing and puncture resistant clear bra'
    },
]

const Specifications = () => {
    const settings = {
        dots: true,
        dotsClass: "dots-style1",
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <section className={css.specifications_container}>
            <h3 className={cx("typoH3", "text_gradient", css.heading)}>
                Specifications
            </h3>
            <div className={css.specifications}>
                <div className={css.slider_container}>
                    <Slider {...settings} className={css.slider}>
                        {specificationsData.map((item, ind) => {
                            return (
                                <div className={css.slide} key={ind}>
                                    <div className={cx("border_gradient", css.card_border)}>
                                        <div className={cx(css.specification)}>
                                            <div className={css.img_container}>
                                                <Image
                                                    src={item.imgSrc}
                                                    alt='image'
                                                    // fill
                                                    width={289}
                                                    height={155}
                                                    quality={100}
                                                    priority={true}
                                                    className={css.img}
                                                />
                                            </div>
                                            <div className={css.specification_text}>
                                                <p className={cx("typoBody1", "text_gradient", css.title)}>Select your package</p>
                                                <p className={cx("typoCaption", css.desc)}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Specifications