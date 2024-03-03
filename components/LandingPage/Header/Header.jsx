import React from 'react'
import cx from 'classnames'
import css from './header.module.scss'
import Link from 'next/link'
import Image from 'next/image'

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