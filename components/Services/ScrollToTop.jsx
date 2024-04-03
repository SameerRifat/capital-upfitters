'use client'

import React, { useEffect } from 'react'

const ScrollToTop = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [currentPage]);

    return children || null;
}

export default ScrollToTop