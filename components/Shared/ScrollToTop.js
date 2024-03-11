'use client'

import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { usePathname } from 'next/navigation';

export default function ScrollToTop({ children }) {
    const pathname = usePathname();


    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [pathname]);

    return children || null;
}

ScrollToTop.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};
