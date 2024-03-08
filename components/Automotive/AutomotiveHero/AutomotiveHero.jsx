'use client'

import React from 'react'
import css from './automotiveHero.module.scss'
import cx from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const AutomotiveHero = () => {
    const router = useRouter();
    return (
        <section className={css.hero}>
            <div className={css.hero_left}>
                <h2 className={cx("typoH2", "text_gradient", css.title)}>
                    Explore what we
                    <br />
                    got in Automotives
                </h2>
                <p className={cx("typoBody1", css.desc)}>
                    Lorem ipsum dolor sit amet consectetur
                    <br />
                    adipisicing elit. Sunt molestias facilis praesentium
                    <br />
                    vitae consectetur nemo dolorum facere quas qui
                    <br />
                    ducimus eius earum.
                </p>
                <div className={css.hero_left_btns}>
                    <Link href="/quote-request" className={cx("primary_btn")}>
                        Get Quote
                    </Link>
                    <Link href="/contact-us" className={cx("primary_btn", css.outiline_btn)}>
                        Contact Us
                    </Link>
                </div>
                <div className={css.gradient_line} />
            </div>
            <div className={css.hero_right}>
                <div className={css.row1}>
                    <div className={`${css.card} ${css.card1}`}>
                        <div className={css.card_img_container}>
                            <Image
                                src='/window-tint.png'
                                alt='image'
                                fill
                                quality={100}
                                priority={true}
                                className={css.card_img}
                            />
                        </div>
                        <div className={css.card_text}>
                            <h3 className={cx("typoH3", css.card_title)}>Window Tint</h3>
                            <p className={cx("typoCaption", css.card_caption)}>
                                Welcome to Capital Upfitters, the
                                <br />
                                family-owned epicenter of top-tier.
                            </p>
                        </div>
                    </div>
                    <div className={`${css.card} ${css.card2}`}>
                        <div className={css.card_img_container}>
                            <Image
                                src='/ceramic-coating.png'
                                alt='image'
                                fill
                                quality={100}
                                priority={true}
                                className={css.card_img}
                            />
                        </div>
                        <div className={css.card_text}>
                            <h3 className={cx("typoH3", css.card_title)}>Ceramic Coatings</h3>
                            <p className={cx("typoCaption", css.card_caption)}>
                                Welcome to Capital Upfitters, the
                                <br />
                                family-owned epicenter of top-tier.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={css.row2}>
                    <div className={`${css.card} ${css.card3}`}>
                        <div className={css.card_img_container}>
                            <Image
                                src='/wheels-tires.png'
                                alt='image'
                                fill
                                quality={100}
                                priority={true}
                                className={css.card_img}
                            />
                        </div>
                        <div className={css.card_text}>
                            <h3 className={cx("typoH3", css.card_title)}>Wheels And Tires</h3>
                            <p className={cx("typoCaption", css.card_caption)}>
                                Welcome to Capital Upfitters, the
                                <br />
                                family-owned epicenter of top-tier.
                            </p>
                        </div>
                    </div>
                    <div className={cx("border_gradient", css.card, css.card4)}>
                        <div className={css.explore_more_btn} onClick={() => router.push('/services')}>
                            Explore
                            <br />
                            more
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AutomotiveHero