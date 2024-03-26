'use client'

import React from 'react'
import css from './recentWorks.module.scss'
import cx from 'classnames'
import Image from 'next/image'
import { urlFor } from '@/lib/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const RecentWorks = ({ portfoliosData }) => {
    const router = useRouter();

    return (
        <div className={css.recent_works_container}>
            <h3 className={cx("typoH3", "text_gradient", css.heading)}>
                Recent works
            </h3>
            <p className={cx("typoBody1", css.description)}>
                Welcome to the pinnacle of vehicle protection with our Full Front Package. Designed for those who
                <br />{" "}
                demand comprehensive, state-of-the-art protection for their vehicle’s most vulnerable areas.
            </p>
            <div className={css.recent_works}>
                {portfoliosData.slice(0, 3).map((item) => {
                    return (
                        <div className={`${css.card}`} key={item.service._id} onClick={() => router.push(`/portfolio/${item.service.slug}`)}>
                            <div className={css.card_img_container}>
                                <Image
                                    src={urlFor(item.portfolioImage).url()}
                                    alt={item.service.serviceTitle}
                                    fill
                                    quality={100}
                                    priority={true}
                                    className={css.card_img}
                                />
                            </div>
                            <div className={css.card_text}>
                                <h4 className={cx('typoH4', css.card_title)}>{item.service.serviceTitle}</h4>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={css.see_more}>
                <Link href='/portfolio'>See more</Link>
            </div>
        </div>
    )
}

export default RecentWorks