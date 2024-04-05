import React from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import FooterLinks from './FooterLinks/FooterLinks'
import Iconify from "@/components/iconify/iconify";

const Footer = () => {
    const socialLinks = [
        { icon: "ri:linkedin-box-fill", href: '/www.linkedin.com' },
        { icon: "ri:twitter-x-fill", href: '/www.twitter.com' },
        { icon: "ri:facebook-circle-fill", href: "https://www.facebook.com/CapitalUpfitters" },
        { icon: "ri:youtube-fill", href: '/www.youtube.com' },
        { icon: "ri:instagram-fill", href: 'https://www.instagram.com/capitalupfitters/?igshid=MzRlODBiNWFlZA%3D%3D' },
    ];
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footer_container}`}>
                <div className={styles.footer_row1}>
                    <div className={styles.company_info}>
                        <Link href='/' className={styles.logo}>
                            <img
                                // src='/logo.png'
                                src='/cu-logo.svg'
                                alt='logo'
                            />
                        </Link>
                        <p>
                            Based in Leander, Texas, our team of skilled
                            <br />
                            technicians are dedicated to providing
                            <br />
                            amazing service for all your truck
                            <br />
                            customization needs
                        </p>
                    </div>
                    <FooterLinks />
                </div>
                <div className={styles.footer_row2}>
                    <p className={styles.copy_right}>
                        @2024 Capital Upfitters. All rights reserved. | Privacy policy | Terms and Conditions
                    </p>
                    <div className={styles.social_links}>
                        {socialLinks.map((link, index) => (
                            <Link href={link.href} key={index} className={styles.social_link} target='_blank'>
                                <Iconify
                                    icon={link.icon}
                                    color="#fff"
                                    width={20}
                                />
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
            <div className="bottom_ellipse_bg" />
        </footer>
    )
}

export default Footer