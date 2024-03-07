'use client'

import Image from 'next/image'
import React from 'react'
import css from './companyLogosSection.module.scss'
import { logos } from './data';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CompanyLogosSection = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };
    return (
        <section className={css.logo_section}>
            <div className={css.slider_container}>
                <Slider {...settings} className={css.slider}>
                    {logos.map((logo, ind) => (
                        <div className={css.slide} key={ind}>
                            <Image
                                key={ind}
                                src={logo.logoImg}
                                alt='airbnb'
                                width={169}
                                height={34}
                                priority={true}
                                quality={100}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default CompanyLogosSection