import React, { useEffect, useRef } from 'react';
import styles from './MobileSidebar.module.scss';
import { Icon } from "@iconify/react";
import { NavLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import OutsideClickHandler from 'react-outside-click-handler';

const MobileSidebar = ({ openSidebar, setOpenSidebar }) => {
    const pathname = usePathname();
    const sidebarRef = useRef(null);

    const handleClickOutside = () => {
        setOpenSidebar(false);
    };

    return (
        <OutsideClickHandler onOutsideClick={handleClickOutside}>
            <div ref={sidebarRef} className={`${styles.sidebar} ${openSidebar && styles.open_sidebar}`}>
                <div className={styles.close_icon} onClick={() => setOpenSidebar(false)}>
                    <Icon
                        icon="material-symbols:close"
                        color='#a3a3a3'
                    />
                </div>
                <div className={styles.mobile_navlinks}>
                    {NavLinks.map((navlink) => {
                        const isActive = pathname === navlink.route;
                        return (
                            <Link
                                key={navlink.label}
                                href={navlink.route}
                                className={`${styles.navlink} ${isActive && styles.active}`}
                                onClick={() => setOpenSidebar(false)}
                            >
                                {navlink.label}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </OutsideClickHandler>
    )
}

export default MobileSidebar;

