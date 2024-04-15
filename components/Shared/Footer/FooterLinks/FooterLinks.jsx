import React from 'react';
import styles from './FooterLinks.module.scss';
import Link from 'next/link';
import Iconify from "@/components/iconify/iconify";

const FooterLinks = () => {
    const links = [
        { title: 'Portfolio', href: '/automotive/portfolio' },
        { title: 'About', href: '/automotive/about-us' },
        { title: 'Our Services', href: '/automotive' },
    ]
    const contactInfo = [
        {
            icon: "ri:home-2-fill" ,
            title: '12019 Nebel St, Rockville, MD 20852',
        },
        {
            icon: "ri:mail-fill",
            title: 'CapitalUpfitters@gmail.com',
            link: 'mailto:info@thewashers.com' // Phone call link
        },
        {
            icon: "ri:phone-fill",
            title: '301-304-1419',
            link: 'tel:+971581249910' // Email link
        }
    ]

    const renderLinks = (links) => (
        <ul className={styles['links']}>
            {links.map((link, index) => (
                <li key={index}>
                    <Link href={link.href}>{link.title}</Link>
                </li>
            ))}
        </ul>
    );

    return (
        <>
            <div className={styles.footer_links}>
                <div className={styles.links_category}>
                    <h3 className={styles['links_heading']}>Contact Info</h3>
                    <ul className={styles['links']}>
                        {contactInfo.map((item, index) => (
                            <li key={index} className={styles.link}>
                                <Iconify
                                    icon={item.icon}
                                    color="rgba(217, 217, 217, 1)"
                                    width={16}
                                />
                                {item.link ? (
                                    <Link href={item.link} target='_blank'>{item.title}</Link>
                                ) : (
                                    <span>{item.title}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.links_category}>
                    <h3 className={styles['links_heading']}>About Us</h3>
                    <ul className={styles['links']}>
                        {links.map((link, index) => (
                            <li key={index} className={styles.link}>
                                <Link href={link.href}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default FooterLinks;
