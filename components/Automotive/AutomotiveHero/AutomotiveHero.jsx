'use client'

import React, { useState } from 'react'
import css from './automotiveHero.module.scss'
import cx from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import ContactUsModal from '@/components/Shared/ContactUs/ContactUsModal'

const AutomotiveHero = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    return (
        <>
            <section className={css.hero}>
                <div className={css.hero_left}>
                    <h2 className={cx("typoH2", "text_gradient", css.title)}>
                        Explore what we
                        <br />
                        got in Automotives
                    </h2>
                    <p className={cx("typoBody1", css.desc)}>
                        Located in the heart of DMV, family-owned epicenter of top-tier auto customization, vehicle preservation, performance enhancements, and protective coatings. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors.
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
                                    src='/services/service1.png'
                                    alt='image'
                                    fill
                                    quality={100}
                                    priority={true}
                                    className={css.card_img}
                                />
                            </div>
                            <div className={css.card_text}>
                                <h3 className={cx("typoH3", css.card_title)}>Patriot Liner</h3>
                                <p className={cx("typoCaption", css.card_caption)}>
                                    Crafted by veterans and proudly made in America, Patriot Liner carries more than 30 years of industry experience.
                                </p>
                            </div>
                        </div>
                        <div className={`${css.card} ${css.card2}`} >
                            <div className={css.card_img_container}>
                                <Image
                                    src='/services/service6.png'
                                    alt='image'
                                    fill
                                    quality={100}
                                    priority={true}
                                    className={css.card_img}
                                />
                            </div>
                            <div className={css.card_text}>
                                <h3 className={cx("typoH3", css.card_title)}>Hitches</h3>
                                <p className={cx("typoCaption", css.card_caption)}>
                                    We take pride in being one of the select shops in the DMV Area that can offer Receiver Hitch Solutions almost for every vehicle.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={css.row2}>
                        <div className={`${css.card} ${css.card3}`} >
                            <div className={css.card_img_container}>
                                <Image
                                    src='/services/service4.png'
                                    alt='image'
                                    fill
                                    quality={100}
                                    priority={true}
                                    className={css.card_img}
                                />
                            </div>
                            <div className={css.card_text}>
                                <h3 className={cx("typoH3", css.card_title)}>CPC Anti-Corrosion Graphene Clear Coat</h3>
                                <p className={cx("typoCaption", css.card_caption)}>
                                    Anti Corrosion Clear Coat acts as an unbreakable chemical shield that prolongs the lifespan of the surface it's applied on.
                                </p>
                            </div>
                        </div>
                        <div className={cx("border_gradient", css.card, css.card4)}>
                            <div className={css.explore_more_btn} onClick={() => router.push('/services')}>
                                Explore All
                                <br />
                                Services
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactUsModal open={open} setOpen={setOpen}/>
        </>
    )
}

export default AutomotiveHero