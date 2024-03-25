'use client'

import React from 'react'
import css from './projectCard.module.scss'
import cx from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { urlFor } from '@/lib/client'

const ProjectCard = ({ img, title, slug, brandSlug, id, gallery=false, onClick }) => {
    const router = useRouter()
    const handleClick = () => {
        if (gallery) {
            onClick();
        } else {
            router.push(`/portfolio/${slug}/${brandSlug}`)
        }
    }
    const imageUrl = img && img.asset ? urlFor(img).url() : '';
    return (
        <div className={`${css.card}`} onClick={handleClick}>
            <div className={css.card_img_container}>
                <Image
                    // src={img}
                    src={imageUrl}
                    alt={title}
                    fill
                    quality={100}
                    priority={true}
                    className={css.card_img}
                />
            </div>
            {title && (
                <div className={css.card_text}>
                    <h3 className={cx('typoH3', css.card_title)}>{title}</h3>
                </div>
            )}
        </div>
    )
}

export default ProjectCard