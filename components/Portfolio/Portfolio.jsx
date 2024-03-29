'use client'

import React, { useState } from 'react'
import css from './portfolio.module.scss'
import cx from 'classnames'
import Iconify from '@/components/iconify/iconify';
import SectionHeading from '@/components/Shared/SectionHeading/SectionHeading'
import Cards from '@/components/Shared/Cards/Cards'
import { projectsData } from '@/mock/portfolio'
import Select from 'react-select'
import { customStyles2, generateCustomStyles } from '@/components/Shared/react-select-custom-styles';
import Breadcrumb from '@/components/Shared/BreadCrumbs/BreadCrumb';
import { useEffect } from 'react';
import Pagination from '@/components/Shared/Pagination/Pagination';

const Portfolio = ({ data }) => {
    const categoryOptionns = [
        { value: "", label: "All Projects" },
        ...data.map((item) => ({ value: item.service.serviceTitle, label: item.service.serviceTitle }))
    ]
    const [search, setSearch] = useState('');
    const [selectedPortfolio, setSelectedPortfolio] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(7); // Number of items per page

    const [visiblePortfolios, setVisiblePortfolios] = useState(data.slice(0, itemsPerPage) || []);

    const getVisiblePortfolios = (portfolios, search) => {
        let filteredPortfolios = portfolios;

        if (selectedPortfolio !== '') {
            filteredPortfolios = portfolios.filter((_portfolio) =>
                _portfolio.service.serviceTitle.toLowerCase() == selectedPortfolio.toLowerCase()
            );
        }

        // Calculate start and end indexes for current page
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        return filteredPortfolios.slice(selectedPortfolio !== '' ? 0 : startIndex, endIndex);
        // return filteredPortfolios
    };

    useEffect(() => {
        setVisiblePortfolios(getVisiblePortfolios(data, search));
    }, [selectedPortfolio, currentPage]);


    return (
        <ScrollToTop currentPage={currentPage}>
            <div className={css.portfolio_container}>
                <SectionHeading>Our Portfolio</SectionHeading>
                <div className={css.filters}>
                    <div className={css.input_wrapper}>
                        <Select
                            // options={projectsData.map((item) => ({ value: item.category, label: item.category }))}
                            options={categoryOptionns}
                            isSearchable={false}
                            styles={generateCustomStyles('140px')}
                            placeholder="All Projects"
                            onChange={(option) => setSelectedPortfolio(option.value)}
                        />
                    </div>
                    {/* <div className={css.input_wrapper}>
                    <input
                        type="text"
                        placeholder="Browse Portfolio"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Iconify icon="bitcoin-icons:search-outline" color="#fff" width={20} />
                </div> */}
                </div>
                <Cards search={selectedPortfolio} visibleCards={visiblePortfolios} />
                <Pagination
                    currentPage={currentPage}
                    totalPages={selectedPortfolio !== '' ? Math.ceil(visiblePortfolios.length / itemsPerPage) : Math.ceil(data.length / itemsPerPage)}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </ScrollToTop>
    )
}

export default Portfolio

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