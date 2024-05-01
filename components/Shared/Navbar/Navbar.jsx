'use client'

import React, { useState } from 'react'
import css from './navbar.module.scss'
import cx from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Iconify from "@/components/iconify/iconify";
import MobileSidebar from './MobileSidebar/MobileSidebar'
import ContactUsModal from '../ContactUs/ContactUsModal'
import ToggleButton from './ToggleButton/ToggleButton'

const Navbar = ({ navlinks }) => {
    const pathname = usePathname();
    const [openSidebar, setOpenSidebar] = useState(false)
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className={css.navbar}>
                <Link href='/' className={css.logo}>
                    <img
                        src='/cu-logo.svg'
                        alt='logo'
                    />
                </Link>
                <div className={css.navlinks}>
                    {navlinks.map((navlink) => {
                        const isActive = pathname === navlink.route || pathname.includes(navlink.route.split('/')[2]);
                        return (
                            <Link key={navlink.label} href={navlink.route} className={`${css.navlink} ${isActive && 'boder_gradient_bottom'}`}>
                                {navlink.label}
                            </Link>
                        )
                    })}
                </div>
                <div className={css.navbar_right}>
                    <ToggleButton />
                    <div className={cx("primary_btn", "typoBody2", css.contact_btn)} onClick={() => setOpen(true)}>
                        Contact Us
                    </div>
                </div>
                <div className={css.menu_nav_right}>
                    <ToggleButton />
                    <div className={css.menu_icon} onClick={() => setOpenSidebar((prevState) => !prevState)}>
                        <Iconify
                            icon="basil:menu-outline"
                            color="#D9F6FF"
                            width={40}
                        />
                    </div>
                </div>
            </header>
            <MobileSidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} navlinks={navlinks} />
            <ContactUsModal open={open} setOpen={setOpen} />
        </>
    )
}

export default Navbar