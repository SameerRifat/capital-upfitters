import React from 'react'
import css from './customArrows.module.scss'
import Iconify from "@/components/iconify/iconify";

export const CustomNextArrow = ({ onClick }) => (
    <div
        className={`${css.customNextArrow}`}
        onClick={onClick}
    >
        <Iconify
            icon="iconamoon:arrow-right-2-bold"
            color="#fff"
            width={50}
        />
    </div>
);

export const CustomPrevArrow = ({ onClick }) => (
    <div
        className={`${css.customPrevArrow}`}
        onClick={onClick}
    >
        <Iconify
            icon="iconamoon:arrow-left-2-bold"
            color="#fff"
            width={50}
        />
    </div>
);