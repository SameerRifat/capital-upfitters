'use client'

import React from 'react'
import css from './portfolioGallery.module.scss'
import ProjectCard from '../ProjectCard/ProjectCard';
import SectionHeading from '@/components/Shared/SectionHeading/SectionHeading';
import Breadcrumb from '@/components/Shared/BreadCrumbs/BreadCrumb';
import Slides from './Slides';

const PortfolioGallery = ({ gallery, title, params }) => {
    const [open, setOpen] = React.useState(false);

    const items = [
        { label: 'Portfolio', url: '/portfolio' },
        { label: `${params.slug}`, url: `/portfolio/${params.slug}` },
        { label: `${title}`, url: '#' },
    ];

    return (
        <>
            <div className={css.gallery_container}>
                <Breadcrumb items={items} />
                {gallery && gallery.length > 0 ? (
                    <>
                        <SectionHeading>{title}</SectionHeading>
                        <div className={css.cards}>
                            {gallery.map((item, index) => (
                                <ProjectCard key={index} img={item.imageSrc} gallery onClick={() => setOpen(true)}/>
                            ))}
                        </div>
                    </>
                ) : (
                    <p className={css.no_project}>No Project Found</p>
                )}
            </div>
            <Slides open={open} setOpen={setOpen} gallery={gallery} />
        </>
    )
}

export default PortfolioGallery