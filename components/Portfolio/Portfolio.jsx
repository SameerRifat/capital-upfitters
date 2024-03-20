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

const Portfolio = () => {
    const [search, setSearch] = useState('');
    const [selectedPortfolio, setSelectedPortfolio] = useState('')
    console.log('selectedPortfolio: ', selectedPortfolio)

    const categoryOptionns = [
        { value: "", label: "All Projects" },
        ...projectsData.map((item) => ({ value: item.category, label: item.category }))
    ]

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
            <Cards visibleCards={projectsData} />
        </div>
    )
}

export default Portfolio