import SectionHeading from '@/components/Shared/SectionHeading/SectionHeading'
import { projectsData } from '@/mock/portfolio';
import React from 'react'
import css from './portfolioProjects.module.scss'
import ProjectCard from '../ProjectCard/ProjectCard';
import Breadcrumb from '@/components/Shared/BreadCrumbs/BreadCrumb';

const PortfolioProjects = ({ projects }) => {
    // const project = projectsData.find((p) => p.slug === params.slug);
    // const filteredCars =
    //     project?.cars.filter((car) => {
    //         const carNameLowerCase = car.brand.toLowerCase();
    //         const searchLowerCase = searchProject.toLowerCase();
    //         const selectLowerCase = selectProject.toLowerCase();

    //         return (
    //             carNameLowerCase.includes(searchLowerCase) &&
    //             (selectLowerCase === "" || carNameLowerCase.includes(selectLowerCase))
    //         );
    //     });

    const items = [
        { label: 'Portfolio', url: '/portfolio' },
        { label: `${projects[0].portfolio.serviceTitle}`, url: '#' },
    ];

    return (
        <div className={css.projects_container}>
            <Breadcrumb items={items} />
            <SectionHeading>{projects[0].portfolio.serviceTitle}</SectionHeading>

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

        </div>
    )
}

export default PortfolioProjects