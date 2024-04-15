'use client'

import Link from 'next/link'
import React from 'react'
import css from './card.module.scss'
import cx from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { urlFor } from '@/lib/client'
import { useActiveIndustryContext } from '@/context/ActiveIndustriesProvider'

const Card = ({ img, title, desc, route }) => {
    const router = useRouter();
    const { activeIndustry, setActiveIndustry } = useActiveIndustryContext();
    const handleClick = (route) => {
        router.push(`${route}`)
        if (route === '/commercial') {
            setActiveIndustry('commercial')
            window.localStorage.setItem("activeIndustry", "commercial");
        } else {
            setActiveIndustry('automotive')
            window.localStorage.setItem("activeIndustry", "automotive");
        }
    }

    return (
        <div onClick={() => handleClick(route)} className={cx("border_gradient", css.card)}>
            <div className={css.card_img_container}>
                <Image
                    src={urlFor(img).url()}
                    alt='image'
                    fill
                    quality={100}
                    priority={true}
                    className={cx(css.card_img, css.card_img1)}
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