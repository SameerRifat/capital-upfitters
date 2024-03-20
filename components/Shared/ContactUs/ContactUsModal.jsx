'use client'

import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import css from './contactUs.module.scss'
import cx from 'classnames'
import './customStyles.css'
import { Icon } from '@iconify/react';
import Iconify from '@/components/iconify/iconify';
import Link from 'next/link';

const contactInfo = [
    {
        icon: "ri:home-2-fill",
        title: '12019 Nebel St, Rockville, MD 20852',
    },
    {
        icon: "ri:mail-fill",
        title: 'CapitalUpfitters@gmail.com',
        link: 'mailto:info@CapitalUpfitters.com' // Phone call link
    },
    {
        icon: "ri:phone-fill",
        title: '301-304-1419',
        link: 'tel:+971581249910' // Email link
    }
]

const socialLinks = [
    { icon: "ri:linkedin-box-fill", href: '/www.linkedin.com' },
    { icon: "ri:twitter-x-fill", href: '/www.twitter.com' },
    { icon: "ri:facebook-circle-fill", href: '/www.facebook.com' },
    { icon: "ri:youtube-fill", href: '/www.youtube.com' },
    { icon: "ri:instagram-fill", href: '/www.instagram.com' },
];

const ContactUsModal = ({ open, setOpen }) => {
    const closeIcon = (
        <Icon
            icon="material-symbols:close"
            color='#ffffff'
            width={25}
        />
    );
    return (
        <Modal open={open} onClose={() => setOpen(false)} center
            classNames={{
                overlay: 'customOverlay',
                modal: 'customModal',
                closeButton: 'customButton',
                // closeIcon: 'customIcon'
            }}
            closeIcon={closeIcon}
        >

            <div className={css.modal_content}>
                <div className={css.content_left}>
                    <h3 className={cx("typoH3", "text_gradient", css.heading)}>
                        GET IN TOUCH
                    </h3>
                    <p className={cx("typoCaption", css.description)}>
                        Lorem ipsum dolor sit amet {" "}
                        <br />
                        consec tetur adipisicing elit. Sunt {" "}
                        <br />
                        molestias facilis praesentium.
                    </p>
                    <ul className={css.links}>
                        {contactInfo.map((item, index) => (
                            <li key={index} className={css.link}>
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

                    <div className={css.social_links}>
                        {socialLinks.map((link, index) => (
                            <Link href={link.href} key={index} className={css.social_link}>
                                <Iconify
                                    icon={link.icon}
                                    color="#fff"
                                    width={20}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={css.content_right}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.003889845189!2d55.396579599999995!3d25.3376505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b007500145f%3A0x8977c523f157ebeb!2sThe%20Cleaners!5e0!3m2!1sen!2s!4v1704018252525!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0, borderRadius: '12px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </Modal>

    )
}

export default ContactUsModal