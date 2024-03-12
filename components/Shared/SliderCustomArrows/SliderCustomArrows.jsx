import React from 'react'
import css from './sliderCustomArrows.module.scss'
import Iconify from "@/components/iconify/iconify";

export const CustomNextArrow = ({ onClick, testimonials=false }) => (
    <div
        className={`${css.customNextArrow}`}
        onClick={onClick}
    >
        <Iconify
            icon={testimonials ? "iconamoon:arrow-right-2" : "ic:round-arrow-right"}
            color="#fff"
            width={50}
        />
        {/* <Iconify
            icon="iconamoon:arrow-right-2-bold"
            color="#fff"
            width={50}
        /> */}
    </div>
);

export const CustomPrevArrow = ({ onClick, testimonials=false }) => (
    <div
        className={`${css.customPrevArrow}`}
        onClick={onClick}
    >
        <Iconify
            icon={testimonials ? "iconamoon:arrow-left-2" : "ic:round-arrow-left"}
            color="#fff"
            width={50}
        />
        {/* <Iconify
            icon="iconamoon:arrow-left-2-bold"
            color="#fff"
            width={50}
        /> */}
    </div>
);