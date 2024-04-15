'use client'

import React from 'react'
import css from './accessoriesCatalogs.module.scss'
import cx from 'classnames'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from '@/components/Shared/SliderCustomArrows/SliderCustomArrows'
import Image from 'next/image';
import { urlFor } from '@/lib/client';
import Link from 'next/link'
import { SectionHeading } from '@/components/Shared/SectionHeading/SectionHeading';

const AccessoriesCatalogs = ({ catalogsData }) => {
    const settings = {
        dots: true,
        dotsClass: "dots-style1",
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        catalogsData.length > 0 && (
            <section className={css.catalogs_container}>
                <SectionHeading>
                    Online Catalogs
                </SectionHeading>
                {/* <h3 className={cx("typoH3", "text_gradient", css.heading)}>
                    Online Catalogs
                </h3> */}
                <div className={css.catalogs}>
                    <div className={css.slider_container}>
                        <Slider {...settings} className={css.slider}>
                            {catalogsData.map((item) => {
                                return (
                                    <div className={css.slide} key={item._id}>
                                        <div
                                            className={cx("border_gradient", css.card_border)}
                                        >
                                            <Link
                                                href={item.link}
                                                target='_blank'
                                                className={cx(css.catalog)}
                                            >
                                                <div className={css.img_container}>
                                                    <Image
                                                        src={urlFor(item.image).url()}
                                                        alt='image'
                                                        // fill
                                                        width={289}
                                                        height={155}
                                                        quality={100}
                                                        priority={true}
                                                        sizes="(max-width: 400px) 100vw, (max-width: 650px) 50vw, (max-width: 950px) 33vw, 25vw"
                                                        className={css.img}
                                                    />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </section>
        )
    )
}

export default AccessoriesCatalogs