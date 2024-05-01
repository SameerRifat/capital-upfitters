'use client'

import React, { Fragment, useEffect, useState } from 'react'
import css from './automotiveHero.module.scss'
import cx from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import ContactUsModal from '@/components/Shared/ContactUs/ContactUsModal'
import { urlFor } from '@/lib/client'
import { AnimatePresence, motion } from "framer-motion"
import { useActiveIndustryContext } from '@/context/ActiveIndustriesProvider'

const AutomotiveHero = ({ heroData, servicesData, commercial = false }) => {
    const { activeIndustry, setActiveIndustry } = useActiveIndustryContext();
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const [visibleCards, setVisibleCards] = useState([0, 1, 2]);

    useEffect(() => {
        // Set a timeout to update the visible cards after a certain interval
        const interval = setInterval(() => {
            setVisibleCards(prevVisibleCards => {
                const nextIndex = prevVisibleCards[2] + 3;
                return [(nextIndex - 2 + servicesData.length) % servicesData.length, (nextIndex - 1 + servicesData.length) % servicesData.length, nextIndex % servicesData.length];
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className={css.hero}>
                <div className={css.hero_left}>
                    <h2 className={cx("typoH2", "text_gradient", css.title)}>
                        {heroData.title}
                    </h2>
                    <p className={cx("typoBody1", css.desc)}>
                        {heroData.description}
                    </p>
                    <div className={css.hero_left_btns}>
                        <Link href={`/${activeIndustry}/quote-request`} className={cx("primary_btn")}>
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
                        <div
                            className={`${css.card} ${css.card1}`}
                            onClick={() => {router.push(`/${commercial ? 'commercial' : 'automotive'}/services/${servicesData[visibleCards[0]].slug}`) }}
                        >
                            <AnimatePresence>
                                <motion.div
                                    key={visibleCards[0]}
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, y: 0, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    exit={{ x: 100, opacity: 0 }}
                                    className={css.card_content}
                                >
                                    <div
                                        className={css.card_img_container}
                                    >
                                        <Image
                                            src={urlFor(servicesData[visibleCards[0]].serviceImages[0]).url()}
                                            alt='image'
                                            fill
                                            quality={100}
                                            priority={true}
                                            sizes="(max-width: 500px) 60vw, (max-width: 1250px) 50vw, 30vw"
                                            className={css.card_img}
                                        />
                                    </div>
                                    <div
                                        className={css.card_text}
                                    >
                                        <h3 className={cx("typoH3", css.card_title)}>{servicesData[visibleCards[0]].serviceTitle}</h3>
                                        <p className={cx("typoCaption", css.card_caption)}>
                                            {servicesData[visibleCards[0]].description}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div
                            className={`${css.card} ${css.card2}`}
                            onClick={() => {router.push(`/${commercial ? 'commercial' : 'automotive'}/services/${servicesData[visibleCards[1]].slug}`) }}
                        >
                            <AnimatePresence>
                                <motion.div
                                    key={visibleCards[1]}
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, y: 0, opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.15 }}
                                    exit={{ x: 100, opacity: 0 }}
                                    className={css.card_content}
                                >
                                    <div
                                        className={css.card_img_container}
                                    >
                                        <Image
                                            src={urlFor(servicesData[visibleCards[1]].serviceImages[0]).url()}
                                            alt='image'
                                            fill
                                            quality={100}
                                            priority={true}
                                            sizes="(max-width: 500px) 60vw, (max-width: 1250px) 50vw, 30vw"
                                            className={css.card_img}
                                        />
                                    </div>
                                    <div
                                        className={css.card_text}
                                    >
                                        <h3 className={cx("typoH3", css.card_title)}>{servicesData[visibleCards[1]].serviceTitle}</h3>
                                        <p className={cx("typoCaption", css.card_caption)}>
                                            {servicesData[visibleCards[1]].description}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className={css.row2}>
                        <div
                            className={`${css.card} ${css.card3}`}
                            onClick={() => {router.push(`/${commercial ? 'commercial' : 'automotive'}/services/${servicesData[visibleCards[2]].slug}`) }}
                        >
                            <AnimatePresence>
                                <motion.div
                                    key={visibleCards[2]}
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                    exit={{ x: 100, opacity: 0 }}
                                    className={css.card_content}
                                >
                                    <div
                                        className={css.card_img_container}
                                    >
                                        <Image
                                            src={urlFor(servicesData[visibleCards[2]].serviceImages[0]).url()}
                                            alt='image'
                                            fill
                                            quality={100}
                                            priority={true}
                                            sizes="(max-width: 500px) 60vw, (max-width: 1250px) 50vw, 30vw"
                                            className={css.card_img}
                                        />
                                    </div>
                                    <div
                                        className={css.card_text}
                                    >
                                        <h3 className={cx("typoH3", css.card_title)}>{servicesData[visibleCards[2]].serviceTitle}</h3>
                                        <p className={cx("typoCaption", css.card_caption)}>
                                            {servicesData[visibleCards[2]].description}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className={cx("border_gradient", css.card, css.card4)}>
                            <div className={css.explore_more_btn} onClick={() => { commercial ? router.push('/commercial/services') : router.push('/automotive/services') }}>
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