'use client'

import React, { useEffect, useState } from 'react';
import css from './services.module.scss';
import GetStarted from '@/components/Shared/GetStarted/GetStarted';
import Iconify from '@/components/iconify/iconify';
import Pagination from '@/components/Shared/Pagination/Pagination';
import { useRouter } from 'next/navigation';
import SectionHeading from '@/components/Shared/SectionHeading/SectionHeading';
import Cards from '@/components/Shared/Cards/Cards';

const Services = ({ servicesData }) => {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(7); // Number of items per page
    const [visibleServices, setVisibleServices] = useState(servicesData.slice(0, itemsPerPage) || []);

    const getVisibleService = (services, search) => {
        let filteredServices = services;

        if (search !== '') {
            filteredServices = services.filter((_service) =>
                _service.serviceTitle.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Calculate start and end indexes for current page
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        return filteredServices.slice(search !== '' ? 0 : startIndex, endIndex);
    };

    useEffect(() => {
        setVisibleServices(getVisibleService(servicesData, search));
        // setVisibleServices(getVisibleService(servicesData, search));
    }, [search, currentPage]);

    return (
        <>
            <ScrollToTop currentPage={currentPage}>
                <section className={css.services_container}>
                    <SectionHeading>Our Services</SectionHeading>
                    <div className={css.search_wrapper}>
                        <input
                            type="text"
                            placeholder="Browse Services"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Iconify icon="bitcoin-icons:search-outline" color="#fff" width={20} />
                    </div>
                    <Cards search={search} setSearch={setSearch} visibleCards={visibleServices} services />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={search !== '' ? Math.ceil(visibleServices.length / itemsPerPage) : Math.ceil(servicesData.length / itemsPerPage)}
                        setCurrentPage={setCurrentPage}
                    />
                </section>
                <GetStarted />
            </ScrollToTop>
        </>
    );
};

export default Services;

function ScrollToTop({ children, currentPage }) {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [currentPage]);

    return children || null;
}