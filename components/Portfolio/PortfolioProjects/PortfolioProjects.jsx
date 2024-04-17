SectionHeadingLarge
import React from 'react'
import css from './portfolioProjects.module.scss'
import Breadcrumb from '@/components/Shared/BreadCrumbs/BreadCrumb';
import ProjectCard from '@/components/Shared/ProjectCard/ProjectCard';
import GetStarted from '@/components/Shared/GetStarted/GetStarted';
import { SectionHeadingLarge } from '@/components/Shared/SectionHeading/SectionHeading';

const PortfolioProjects = ({ projects }) => {
    const items = [
        { label: 'Portfolio', url: '/automotive/portfolio' },
        { label: `${projects[0].portfolio.serviceTitle}`, url: '#' },
    ];

    return (
        <div className={css.projects_container}>
            <Breadcrumb items={items} />
            <SectionHeadingLarge>{projects[0].portfolio.serviceTitle}</SectionHeadingLarge>

            {projects.length > 0 ? (
                <div className={css.cards}>
                    {projects.map(({ _id, gallery, brand, portfolio, brandSlug }) => (
                        <ProjectCard
                            key={_id}
                            img={gallery[0]}
                            title={brand}
                            slug={portfolio.slug}
                            brandSlug={brandSlug}
                            id={_id}
                        />
                    ))}
                </div>
            ) : (
                <p className={css.no_project}>No Project Found</p>
            )}

            <div style={{ marginTop: '5rem' }}>
                <GetStarted />
            </div>

        </div>
    )
}

export default PortfolioProjects