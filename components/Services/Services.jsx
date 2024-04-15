'use client'

import React, { useEffect, useState } from 'react';
import css from './services.module.scss';
import GetStarted from '@/components/Shared/GetStarted/GetStarted';
import Iconify from '@/components/iconify/iconify';
import Pagination from '@/components/Shared/Pagination/Pagination';
import { useRouter } from 'next/navigation';
import Cards from '@/components/Shared/Cards/Cards';
import PaginationScrollToTop from '@/components/Shared/PaginationScrollToTop';
import { SectionHeadingLarge } from '@/components/Shared/SectionHeading/SectionHeading';
import Select from 'react-select'
import { generateCustomStyles } from '@/components/Shared/react-select-custom-styles';

const Services = ({ servicesData, commercial = false }) => {
    const categoryOptionns = [
        { value: "", label: "All Services" },
        ...servicesData.map((item) => ({ value: item.serviceTitle, label: item.serviceTitle }))
    ]
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [selectedService, setSelectedService] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(7); // Number of items per page
    const [visibleServices, setVisibleServices] = useState(servicesData.slice(0, itemsPerPage) || []);

    const getVisibleService = (services, search) => {
        let filteredServices = services;

        if (selectedService !== '') {
            filteredServices = services.filter((_service) =>
                _service.serviceTitle.toLowerCase() == selectedService.toLowerCase()
            );
        }

        // Calculate start and end indexes for current page
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        return filteredServices.slice(selectedService !== '' ? 0 : startIndex, endIndex);
    };

    useEffect(() => {
        setVisibleServices(getVisibleService(servicesData, selectedService));
    }, [selectedService, currentPage]);

    return (
        <>
            <PaginationScrollToTop currentPage={currentPage}>
                <section className={css.services_container}>
                    <SectionHeadingLarge>Our Services</SectionHeadingLarge>
                    <div className={css.filters}>
                        <div className={css.input_wrapper}>
                            <Select
                                // options={projectsData.map((item) => ({ value: item.category, label: item.category }))}
                                options={categoryOptionns}
                                isSearchable={false}
                                styles={generateCustomStyles('170px')}
                                placeholder="All Projects"
                                onChange={(option) => setSelectedService(option.value)}
                            />
                        </div>
                    </div>
                    {/* <div className={css.search_wrapper}>
                        <input
                            type="text"
                            placeholder="Browse Services"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Iconify icon="bitcoin-icons:search-outline" color="#fff" width={20} />
                    </div> */}
                    <Cards search={selectedService} setSearch={setSearch} visibleCards={visibleServices} services commercial={commercial} />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={selectedService !== '' ? Math.ceil(visibleServices.length / itemsPerPage) : Math.ceil(servicesData.length / itemsPerPage)}
                        setCurrentPage={setCurrentPage}
                    />
                </section>
                <GetStarted />
            </PaginationScrollToTop>
        </>
    );
};

export default Services;