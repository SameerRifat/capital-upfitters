'use client'

import React, { useState } from 'react'
import css from './automotiveHero.module.scss'
import cx from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import ContactUsModal from '@/components/Shared/ContactUs/ContactUsModal'

const AutomotiveHero = ({ heroData }) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    return (
        <>
            <section className={css.hero}>
                <div className={css.hero_left}>
                    <h2 className={cx("typoH2", "text_gradient", css.title)}>
                        {heroData.title[0]}
                        <br />
                        {heroData.title[1]}
                    </h2>
                    <p className={cx("typoBody1", css.desc)}>
                    {heroData.description}
                    </p>
                    <div className={css.hero_left_btns}>
                        <Link href="/quote-request" className={cx("primary_btn")}>
                            Get Quote
                        </Link>
                        <div className={cx("primary_btn", css.outiline_btn)} onClick={() => setOpen(true)}>
                            Contact Us
                        </div>
                    </div>
                    <div className={css.gradient_line} />
                </div>
                <div className={css.hero_right}>
                    <div className={css.row1}>
                        <div className={`${css.card} ${css.card1}`} >
                            <div className={css.card_img_container}>
                                <Image
                                    src={heroData.cards[0].image}
                                    alt='image'
                                    fill
                                    quality={100}
                                    priority={true}
                                    className={css.card_img}
                                />
                            </div>
                            <div className={css.card_text}>
                                <h3 className={cx("typoH3", css.card_title)}>{heroData.cards[0].title}</h3>
                                <p className={cx("typoCaption", css.card_caption)}>
                                    {heroData.cards[0].caption}
                                </p>
                            </div>
                        </div>
                        <div className={`${css.card} ${css.card2}`} >
                            <div className={css.card_img_container}>
                                <Image
                                    src={heroData.cards[1].image}
                                    alt='image'
                                    fill
                                    quality={100}
                                    priority={true}
                                    className={css.card_img}
                                />
                            </div>
                            <div className={css.card_text}>
                                <h3 className={cx("typoH3", css.card_title)}>{heroData.cards[1].title}</h3>
                                <p className={cx("typoCaption", css.card_caption)}>
                                    {heroData.cards[1].caption}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={css.row2}>
                        <div className={`${css.card} ${css.card3}`} >
                            <div className={css.card_img_container}>
                                <Image
                                    src={heroData.cards[2].image}
                                    alt='image'
                                    fill
                                    quality={100}
                                    priority={true}
                                    className={css.card_img}
                                />
                            </div>
                            <div className={css.card_text}>
                                <h3 className={cx("typoH3", css.card_title)}>{heroData.cards[2].title}</h3>
                                <p className={cx("typoCaption", css.card_caption)}>
                                    {heroData.cards[2].caption}
                                </p>
                            </div>
                        </div>
                        <div className={cx("border_gradient", css.card, css.card4)}>
                            <div className={css.explore_more_btn} onClick={() => router.push(`${heroData.explore_more_link}`)}>
                                Explore All
                                <br />
                                Services
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactUsModal open={open} setOpen={setOpen} />
        </>
    )
}

export default AutomotiveHero