'use client'

import React from 'react'
import css from './portfolioGallery.module.scss'
import cx from 'classnames'
import ProjectCard from '../ProjectCard/ProjectCard';
import SectionHeading from '@/components/Shared/SectionHeading/SectionHeading';
import Breadcrumb from '@/components/Shared/BreadCrumbs/BreadCrumb';
import Slides from './Slides';
import PortfolioDetails from './PortfolioDetails/PortfolioDetails';

const PortfolioGallery = ({ data }) => {
    const { brand, portfolio, details, techniques, gallery, brandSlug } = data
    const [open, setOpen] = React.useState(false);

    const items = [
        { label: 'Portfolio', url: '/portfolio' },
        { label: `${portfolio.serviceTitle}`, url: `/portfolio/${portfolio.slug}` },
        { label: `${brand}`, url: '#' },
    ];

    return (
        <>
            <div className={css.gallery_container}>
                <Breadcrumb items={items} />
                {gallery && gallery.length > 0 ? (
                    <>
                        <SectionHeading>{brand}</SectionHeading>
                        <div className={css.cards}>
                            {gallery.map((item, index) => (
                                <ProjectCard key={index} img={item} gallery onClick={() => setOpen(true)} />
                            ))}
                        </div>
                    </>
                ) : (
                    <p className={css.no_project}>No Project Found</p>
                )}
                <PortfolioDetails data={data}/>
            </div>
            <Slides open={open} setOpen={setOpen} gallery={gallery} />
        </>
    )
}

export default PortfolioGallery