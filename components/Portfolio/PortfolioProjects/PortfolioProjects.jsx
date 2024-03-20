import SectionHeading from '@/components/Shared/SectionHeading/SectionHeading'
import { projectsData } from '@/mock/portfolio';
import React from 'react'
import css from './portfolioProjects.module.scss'
import ProjectCard from '../ProjectCard/ProjectCard';
import Breadcrumb from '@/components/Shared/BreadCrumbs/BreadCrumb';

const PortfolioProjects = ({ params }) => {
    const project = projectsData.find((p) => p.slug === params.slug);
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
        { label: `${project.title}`, url: '#' },
    ];

    return (
        <div className={css.projects_container}>
            <Breadcrumb items={items} />
            {project ? (
                <>
                    <SectionHeading>{project.title}</SectionHeading>
                    <div className={css.cards}>
                        {project.cars.map((car, index) => (
                            <ProjectCard key={index} img={car.imageSrc} title={car.brand} slug={params.slug} id={car.id} />
                        ))}
                    </div>
                </>
            ) : (
                <p className={css.no_project}>No Project Found</p>
            )}
        </div>
    )
}

export default PortfolioProjects