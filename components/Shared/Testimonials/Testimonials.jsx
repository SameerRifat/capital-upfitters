'use client'

import React, { useState } from 'react'
import css from './testimonials.module.scss'
import cx from 'classnames'
import Image from 'next/image'
import { testimonialsData } from './data'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from './CustomArrows/CustomArrows'

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

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
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        beforeChange: (current, next) => setActiveIndex(next),
    };

    return (
        <section className={css.tetimonials_container}>
            <h2 className={cx("typoH2", "text_gradient", css.heading)}>
                What clients are saying {" "}
                <br />
                about us
            </h2>
            <div className={css.testimonials}>
                <div className={css.slider_container}>
                    <Slider {...settings} className={css.slider}>
                        {testimonialsData.map((item, ind) => {
                            return (
                                <div className={css.slide} key={ind}>
                                    <div className={`${css.tetimonial} ${activeIndex === ind && css.tetimonial1}`}>
                                        <Image
                                            src='/quote.svg'
                                            alt='quote'
                                            width={24}
                                            height={16}
                                            quality={100}
                                        />
                                        <p className={cx("typoBody2", css.desc)}>
                                            {item.desc}
                                        </p>
                                        <div className={css.client}>
                                            <div className={css.avatar}>
                                                <Image
                                                    src={item.avatar}
                                                    alt='avatar'
                                                    width={40}
                                                    height={40}
                                                    quality={100}
                                                />
                                            </div>
                                            <div>
                                                <span>{item.name}</span>
                                                <small>{item.about}</small>
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

export default Testimonials
