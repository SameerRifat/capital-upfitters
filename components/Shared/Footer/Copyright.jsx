'use client'

import React from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'
import { useActiveIndustryContext } from '@/context/ActiveIndustriesProvider';

const Copyright = () => {
    const { activeIndustry, setActiveIndustry } = useActiveIndustryContext();

    return (
        <p className={styles.copy_right}>
            @2024 Capital Upfitters. All rights reserved. | <Link href={`/${activeIndustry}/privacy-policy`}>Privacy policy</Link> | <Link href={`/${activeIndustry}/terms-and-conditions`}>Terms and Conditions</Link>
        </p>
    )
}

export default Copyright