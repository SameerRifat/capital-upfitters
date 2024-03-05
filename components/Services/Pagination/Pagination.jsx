import React from 'react';
import css from './pagination.module.scss';
import Iconify from '@/components/iconify';

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
    console.log('totalPages: ', totalPages)
    const handleClick = (page) => {
        setCurrentPage(page);
    };

    const renderPageNumbers = () => {
        const maxPagesToShow = 5; // Maximum number of pages to show
        const pages = [];
        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        if (totalPages > maxPagesToShow) {
            if (endPage === totalPages) {
                startPage = Math.max(1, endPage - maxPagesToShow + 1);
            } else if (startPage === 1) {
                endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    className={i === currentPage ? css.active : ""}
                    onClick={() => handleClick(i)}
                >
                    {i}
                </button>
            );
        }

        return pages;
    };

    if(totalPages <= 1) return null

    return (
        <div className={css.pagination_container}>
            <div className={css.pagination}>
                <button
                    className={css.arrow_left}
                    disabled={currentPage === 1}
                    onClick={() => handleClick(currentPage - 1)}
                >
                    <Iconify
                        icon="material-symbols:arrow-left"
                        color="#fff"
                        width={30}
                    />
                </button>
                {renderPageNumbers()}
                <button
                    className={css.arrow_right}
                    disabled={currentPage === totalPages}
                    onClick={() => handleClick(currentPage + 1)}
                >
                    <Iconify
                        icon="material-symbols:arrow-right-rounded"
                        color="#fff"
                        width={30}
                    />
                </button>
            </div>
        </div>
    );
};

export default Pagination;