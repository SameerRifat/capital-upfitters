'use client'

import React from 'react'

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Video from "yet-another-react-lightbox/plugins/video";
import { urlFor } from '@/lib/client';

const Slides = ({ open, setOpen, gallery }) => {
    const images = gallery.map((item) => {
        return { src: urlFor(item).url(), width: 3840, height: 5120 }
    })

    const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
    const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

    function nextImageUrl(src, size) {
        return `/_next/image?url=${encodeURIComponent(src)}&w=${size}&q=75`;
    }

    const slides = images.map(({ src, width, height }) => ({
        width,
        height,
        src: nextImageUrl(src, width),
        srcSet: imageSizes
            .concat(...deviceSizes)
            .filter((size) => size <= width)
            .map((size) => ({
                src: nextImageUrl(src, size),
                width: size,
                height: Math.round((height / width) * size),
            })),
    }));

    return (
        <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={slides}
            plugins={[Zoom]}
        />
    )
}

export default Slides