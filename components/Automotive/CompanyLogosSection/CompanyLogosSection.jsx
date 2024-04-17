'use client'

import Image from 'next/image'
import React from 'react'
import css from './companyLogosSection.module.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { urlFor } from '@/lib/client';

const CompanyLogosSection = ({ logosData }) => {
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
                    {logosData.map((item) => (
                        <div className={css.slide} key={item._id}>
                            <Image
                                src={urlFor(item.image).url()}
                                alt='logo'
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