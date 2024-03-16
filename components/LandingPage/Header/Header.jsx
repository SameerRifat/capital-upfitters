'use client'

import React from 'react'
import css from './header.module.scss'
import Link from 'next/link'
import toast from 'react-hot-toast'

const Header = () => {
  return (
    <header className={css.header}>
        <Link href='/' className={css.logo}>
          <img
            src='/logo.png'
            alt='logo'
          />
        </Link>
        <Link href='/contact-us' className={css.contact_us}>
            Contact Us
        </Link>
    </header>
  )
}

export default Header