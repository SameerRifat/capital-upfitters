import { useEffect } from "react";

export default function PaginationScrollToTop({ children, currentPage }) {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [currentPage]);

    return children || null;
}