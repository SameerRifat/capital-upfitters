'use client'

import React, { useEffect, useState } from 'react'
import css from './accessories.module.scss'
import cx from 'classnames'
import { urlFor } from '@/lib/client'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import Pagination from '@/components/Shared/Pagination/Pagination'
import PaginationScrollToTop from '@/components/Shared/PaginationScrollToTop'
import { generateCustomStyles } from '@/components/Shared/react-select-custom-styles'
import Select from 'react-select'

const Accessories = ({ accessoriesData }) => {
    const accessoriesOptionns = [
        { value: "", label: "All Accessories" },
        ...accessoriesData.map((item) => ({ value: item.accessoryName, label: item.accessoryName }))
    ]
    const [selectedAccessory, setSelectedAccessory] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3); // Number of items per page
    const [visibleAccessories, setVisibleAccessories] = useState(accessoriesData.slice(0, itemsPerPage) || []);

    const getVisibleService = (accessoriesData, selectedAccessory) => {
        let filteredAccessories = accessoriesData;

        if (selectedAccessory !== '') {
            filteredAccessories = accessoriesData.filter((_accessory) =>
                _accessory.accessoryName.toLowerCase() == selectedAccessory.toLowerCase()
            );
        }

        // Calculate start and end indexes for current page
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        return filteredAccessories.slice(selectedAccessory !== '' ? 0 : startIndex, endIndex);
    };

    useEffect(() => {
        setVisibleAccessories(getVisibleService(accessoriesData, selectedAccessory));
    }, [selectedAccessory, currentPage]);

    return (
        <PaginationScrollToTop currentPage={currentPage}>
            <div className={css.accessories_container}>
                <h1 className={cx("typoH1", "text_gradient", css.heading)}>
                    Accessories
                </h1>
                <div className={css.filters}>
                    <div className={css.input_wrapper}>
                        <Select
                            options={accessoriesOptionns}
                            isSearchable={true}
                            styles={generateCustomStyles('160px')}
                            placeholder="All Accessories"
                            onChange={(option) => setSelectedAccessory(option.value)}
                        />
                    </div>
                </div>
                <div className={css.accessories}>
                    {visibleAccessories && visibleAccessories.length > 0 ? visibleAccessories.map((item) => {
                        return (
                            <div className={css.accessory}>
                                <h3 className={cx("typoH3", "text_gradient", css.accessory_name)}>
                                    {item.accessoryName}
                                </h3>
                                <div className={css.accessory_content}>
                                    <div className={cx("portableTextWrapper", css.accessory_text)}>
                                        <PortableText value={item.details} />
                                    </div>
                                    <div className={css.card_img_container}>
                                        <Image
                                            src={urlFor(item.accessoryImage).url()}
                                            alt={item.serviceTitle}
                                            fill
                                            quality={100}
                                            priority={true}
                                            sizes="(max-width: 750px) 100vw, 50vw"
                                            className={css.card_img}
                                        />
                                    </div>
                                </div>
                                <div className={css.gradient_line} />
                            </div>
                        )
                    }) : (
                        <div className='error_message'>No Accessories found</div>
                    )}
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={selectedAccessory !== '' ? Math.ceil(visibleAccessories.length / itemsPerPage) : Math.ceil(accessoriesData.length / itemsPerPage)}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </PaginationScrollToTop>
    )
}

export default Accessories