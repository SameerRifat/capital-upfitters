'use client'

import React from 'react'
import css from './portfolioGallery.module.scss'
import cx from 'classnames'
import { SectionHeadingLarge } from '@/components/Shared/SectionHeading/SectionHeading';
import Breadcrumb from '@/components/Shared/BreadCrumbs/BreadCrumb';
import Slides from './Slides';
import PortfolioDetails from './PortfolioDetails/PortfolioDetails';
import { CustomNextArrow, CustomPrevArrow } from '@/components/Shared/SliderCustomArrows/SliderCustomArrows';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from '@/components/Shared/ProjectCard/ProjectCard';
import GetStarted from '@/components/Shared/GetStarted/GetStarted';

const PortfolioGallery = ({ data }) => {
    const { brand, portfolio, details, techniques, gallery, brandSlug } = data
    const [open, setOpen] = React.useState(false);

    const items = [
        { label: 'Portfolio', url: '/automotive/portfolio' },
        { label: `${portfolio.serviceTitle}`, url: `/automotive/portfolio/${portfolio.slug}` },
        { label: `${brand}`, url: '#' },
    ];

    const settings = {
        dots: true,
        dotsClass: "dots-style1",
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow testimonials />,
        prevArrow: <CustomPrevArrow testimonials />,
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
    };

    return (
        <>
            <div className={css.gallery_container}>
                <Breadcrumb items={items} />
                <SectionHeadingLarge>{brand}</SectionHeadingLarge>
                <div className={css.slider_container}>
                    <Slider {...settings} className={css.slider}>
                        {gallery.map((item, ind) => {
                            return (
                                <div className={css.slide} key={ind}>
                                    <ProjectCard img={item} gallery onClick={() => setOpen(true)} />
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                {/* <div className={css.slides}>
                    {gallery && gallery.length > 0 ? (
                        <>
                            <SectionHeading>{brand}</SectionHeading>
                            <div className={css.slider_container}>
                                <Slider {...settings} className={css.slider}>
                                    {gallery.map((item, index) => {
                                        return (
                                            <div className={css.slide} key={index}>
                                                <ProjectCard img={item} gallery onClick={() => setOpen(true)} />
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>
                        </>
                    ) : (
                        <p className={css.no_project}>No Project Found</p>
                    )}
                </div> */}
                <PortfolioDetails data={data} />

                <div style={{ marginTop: '5rem' }}>
                    <GetStarted />
                </div>

            </div>
            <Slides open={open} setOpen={setOpen} gallery={gallery} />
        </>
    )
}

export default PortfolioGallery