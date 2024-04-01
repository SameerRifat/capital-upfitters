'use client'

import React, { useEffect, useState } from 'react'
import css from './automotiveHero.module.scss'
import cx from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import ContactUsModal from '@/components/Shared/ContactUs/ContactUsModal'
import { urlFor } from '@/lib/client'
import { motion } from "framer-motion"

const AutomotiveHero = ({ heroData }) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const [visibleCards, setVisibleCards] = useState([0, 1, 2]);

    useEffect(() => {
        // Set a timeout to update the visible cards after a certain interval
        const interval = setInterval(() => {
            setVisibleCards(prevVisibleCards => {
                const nextIndex = prevVisibleCards[2] + 3;
                return [(nextIndex - 2 + heroData.length) % heroData.length, (nextIndex - 1 + heroData.length) % heroData.length, nextIndex % heroData.length];
            });
        }, 5000); 

        return () => clearInterval(interval);
    }, []);

    console.log('visibleCards[0]: ', visibleCards[0])

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
                        <div className={`${css.card} ${css.card1}`} key={visibleCards[0]} onClick={() => router.push(`/services/${heroData[visibleCards[0]].slug}`)}>
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 100, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className={css.card_img_container}
                            >
                                <Image
                                    src={urlFor(heroData[visibleCards[0]].serviceImage).url()}
                                    alt='image'
                                    fill
                                    quality={100}
                                    priority={true}
                                    className={css.card_img}
                                />
                            </motion.div>
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 100, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className={css.card_text}
                            >
                                <h3 className={cx("typoH3", css.card_title)}>{heroData[visibleCards[0]].serviceTitle}</h3>
                                <p className={cx("typoCaption", css.card_caption)}>
                                    {heroData[visibleCards[0]].smallDescription}
                                </p>
                            </motion.div>
                        </div>
                        <div className={`${css.card} ${css.card2}`} key={visibleCards[1]} onClick={() => router.push(`/services/${heroData[visibleCards[1]].slug}`)}>
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 100, opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.15 }}
                                className={css.card_img_container}
                            >
                                <Image
                                    src={urlFor(heroData[visibleCards[1]].serviceImage).url()}
                                    alt='image'
                                    fill
                                    quality={100}
                                    priority={true}
                                    className={css.card_img}
                                />
                            </motion.div>
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 100, opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.15 }}
                                className={css.card_text}
                            >
                                <h3 className={cx("typoH3", css.card_title)}>{heroData[visibleCards[1]].serviceTitle}</h3>
                                <p className={cx("typoCaption", css.card_caption)}>
                                    {heroData[visibleCards[1]].smallDescription}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                    <div className={css.row2}>
                        <div className={`${css.card} ${css.card3}`} key={visibleCards[2]} onClick={() => router.push(`/services/${heroData[visibleCards[2]].slug}`)}>
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 100, opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className={css.card_img_container}
                            >
                                <Image
                                    src={urlFor(heroData[visibleCards[2]].serviceImage).url()}
                                    alt='image'
                                    fill
                                    quality={100}
                                    priority={true}
                                    className={css.card_img}
                                />
                            </motion.div>
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 100, opacity: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className={css.card_text}
                            >
                                <h3 className={cx("typoH3", css.card_title)}>{heroData[visibleCards[2]].serviceTitle}</h3>
                                <p className={cx("typoCaption", css.card_caption)}>
                                    {heroData[visibleCards[2]].smallDescription}
                                </p>
                            </motion.div>
                            {/* <div className={css.card_img_container}>
                                <Image
                                    src={urlFor(heroData[visibleCards[2]].serviceImage).url()}
                                    alt='image'
                                    fill
                                    quality={100}
                                    priority={true}
                                    className={css.card_img}
                                />
                            </div>
                            <div className={css.card_text}>
                                <h3 className={cx("typoH3", css.card_title)}>{heroData[visibleCards[1]].serviceTitle}</h3>
                                <p className={cx("typoCaption", css.card_caption)}>
                                    {heroData[visibleCards[1]].smallDescription}
                                </p>
                            </div> */}
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