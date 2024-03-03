'use client'

import Link from 'next/link'
import React from 'react'
import css from './card.module.scss'
import cx from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Card = ({ img, title, desc, route }) => {
    const router = useRouter();

    return (
        <div onClick={() => router.push(`${route}`)} className={cx("border_gradient", css.card)}>
            <div className={css.card_img_container}>
                <Image
                    src={img}
                    alt='image'
                    fill
                    quality={100}
                    priority={true}
                    className={css.card_img}
                />
            </div>
            <div className={css.card_text}>
                <h1>{title}</h1>
                <p>
                    {desc}
                </p>
            </div>
            <Image
                src={'/dots.png'}
                width={45}
                height={21}
                className={css.dots}
            />
        </div>
    )
}

export default Card