'use client'

import React, { useState } from 'react'
import css from './navbar.module.scss'
import cx from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavLinks } from '@/constants'
import Iconify from "@/components/iconify/iconify";
import MobileSidebar from './MobileSidebar/MobileSidebar'

const Navbar = () => {
    const pathname = usePathname();
    const [openSidebar, setOpenSidebar] = useState(false)

    return (
        <>
            <header className={css.navbar}>
                <Link href='/' className={css.logo}>
                    <img
                        src='/logo.png'
                        alt='logo'
                    />
                </Link>
                <div className={css.navlinks}>
                    {NavLinks.map((navlink) => {
                        const isActive = pathname === navlink.route;
                        return (
                            <Link key={navlink.label} href={navlink.route} className={`${css.navlink} ${isActive && css.active}`}>
                                {navlink.label} {isActive}
                            </Link>
                        )
                    })}
                </div>
                <Link href='/contact-us' className={cx("primary_btn", "typoBody2", css.contact_btn)}>
                    Contact Us
                </Link>
                <div className={css.menu_icon} onClick={() => setOpenSidebar((prevState) => !prevState)}>
                    <Iconify
                        icon="basil:menu-outline"
                        color="#D9F6FF"
                        width={40}
                    />
                </div>
            </header>
            <MobileSidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        </>
    )
}

export default Navbar