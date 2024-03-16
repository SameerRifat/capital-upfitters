import React from 'react'
import css from './recentWorks.module.scss'
import cx from 'classnames'
import Image from 'next/image'

const recentWorksData = [
    {
        imgSrc: '/recent-works1.png',
        title: 'Mercedes BENZ 2020'
    },
    {
        imgSrc: '/recent-works2.png',
        title: 'GMC Truck'
    },
    {
        imgSrc: '/recent-works3.png',
        title: 'Tesla car'
    },
]

const RecentWorks = () => {
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
                {recentWorksData.map((recentWork, ind) => {
                    return (
                        <div className={`${css.card}`} key={ind}>
                            <div className={css.card_img_container}>
                                <Image
                                    src={recentWork.imgSrc}
                                    alt={recentWork.title}
                                    fill
                                    quality={100}
                                    priority={true}
                                    className={css.card_img}
                                />
                            </div>
                            <div className={css.card_text}>
                                <h4 className={cx('typoH4', css.card_title)}>{recentWork.title}</h4>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default RecentWorks