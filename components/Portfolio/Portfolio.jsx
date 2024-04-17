'use client'

import React, { useState } from 'react'
import css from './portfolio.module.scss'
import { SectionHeadingLarge } from '@/components/Shared/SectionHeading/SectionHeading';
import Cards from '@/components/Shared/Cards/Cards'
import Select from 'react-select'
import { generateCustomStyles } from '@/components/Shared/react-select-custom-styles';
import { useEffect } from 'react';
import Pagination from '@/components/Shared/Pagination/Pagination';
import GetStarted from '@/components/Shared/GetStarted/GetStarted';
import PaginationScrollToTop from '@/components/Shared/PaginationScrollToTop';

const Portfolio = ({ data, commercial=false }) => {
    const categoryOptionns = [
        { value: "", label: "All Portfolios" },
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
    };

    useEffect(() => {
        setVisiblePortfolios(getVisiblePortfolios(data, search));
    }, [selectedPortfolio, currentPage]);


    return (
        <PaginationScrollToTop currentPage={currentPage}>
            <div className={css.portfolio_container}>
                <SectionHeadingLarge>Our Portfolio</SectionHeadingLarge>
                <div className={css.filters}>
                    <div className={css.input_wrapper}>
                        <Select
                            options={categoryOptionns}
                            isSearchable={true}
                            styles={generateCustomStyles('140px')}
                            placeholder="All Portfolios"
                            onChange={(option) => setSelectedPortfolio(option.value)}
                        />
                    </div>
                </div>
                <Cards search={selectedPortfolio} visibleCards={visiblePortfolios} commercial={commercial}/>
                <Pagination
                    currentPage={currentPage}
                    totalPages={selectedPortfolio !== '' ? Math.ceil(visiblePortfolios.length / itemsPerPage) : Math.ceil(data.length / itemsPerPage)}
                    setCurrentPage={setCurrentPage}
                />
                <div style={{marginTop: '5rem'}}>
                    <GetStarted />
                </div>
            </div>
        </PaginationScrollToTop>
    )
}

export default Portfolio