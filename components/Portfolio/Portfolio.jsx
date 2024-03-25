'use client'

import React, { useState } from 'react'
import css from './portfolio.module.scss'
import cx from 'classnames'
import Iconify from '@/components/iconify/iconify';
import SectionHeading from '../Shared/SectionHeading/SectionHeading'
import Cards from '../Shared/Cards/Cards'
import { projectsData } from '@/mock/portfolio'
import Select from 'react-select'
import { customStyles2, generateCustomStyles } from '../Shared/react-select-custom-styles';
import Breadcrumb from '../Shared/BreadCrumbs/BreadCrumb';
import { useEffect } from 'react';

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

        return filteredPortfolios.slice(startIndex, endIndex);
    };

    useEffect(() => {
        setVisiblePortfolios(getVisiblePortfolios(data, search));
    }, [selectedPortfolio]);


    return (
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
            <Cards visibleCards={visiblePortfolios} />
        </div>
    )
}

export default Portfolio