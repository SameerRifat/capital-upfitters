'use client'

import React, { useEffect, useState } from 'react';
import css from './services.module.scss';
import cx from 'classnames';
import Image from 'next/image';
import { servicesData } from './data';
import GetStarted from '../Shared/GetStarted/GetStarted';
import Iconify from '@/components/iconify/iconify';
import Pagination from './Pagination/Pagination';
import { useRouter } from 'next/navigation';

const Services = () => {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(7); // Number of items per page
    const [visibleServices, setVisibleServices] = useState(servicesData.slice(0, itemsPerPage) || []);

    const getVisibleService = (services, search) => {
        let filteredServices = services;

        if (search !== '') {
            filteredServices = services.filter((_service) =>
                _service.serviceName.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Calculate start and end indexes for current page
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        return filteredServices.slice(startIndex, endIndex);
    };

    useEffect(() => {
        setVisibleServices(getVisibleService(servicesData, search));
    }, [search, currentPage]);

    return (
        <>
            <section className={css.services_container}>
                <h3 className={cx('typoH3', 'text_gradient', css.heading)}>Our Services</h3>
                <div className={css.search_wrapper}>
                    <input
                        type="text"
                        placeholder="Browse Services"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Iconify icon="bitcoin-icons:search-outline" color="#fff" width={20} />
                </div>
                <div className={css.services}>
                    {visibleServices.length !== 0 ? (
                        visibleServices.map((service) => {
                            return (
                                <div className={`${css.card}`} key={service.id} onClick={() => router.push(`/services/${service.id}`)}>
                                    <div className={css.card_img_container}>
                                        <Image
                                            src={service.imageSrc}
                                            alt={service.serviceName}
                                            fill
                                            quality={100}
                                            priority={true}
                                            className={css.card_img}
                                        />
                                    </div>
                                    <div className={css.card_text}>
                                        <h3 className={cx('typoH3', css.card_title)}>{service.serviceName}</h3>
                                        <p className={cx('typoCaption', css.card_caption)}>{service.serviceDesc}</p>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p className={css.no_service}>No Service Found</p>
                    )}
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={search !== '' ? Math.ceil(visibleServices.length / itemsPerPage) : Math.ceil(servicesData.length / itemsPerPage)}
                    setCurrentPage={setCurrentPage}
                />
            </section>
            <GetStarted />
        </>
    );
};

export default Services;