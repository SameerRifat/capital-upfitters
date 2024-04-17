'use client'

import React, { useState } from 'react'
import css from './header.module.scss'
import Link from 'next/link'
import ContactUsModal from '@/components/Shared/ContactUs/ContactUsModal'

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={css.header}>
        <Link href='/' className={css.logo}>
          <img
            src='/cu-logo.svg'
            alt='logo'
          />
        </Link>
        <div className={css.contact_us} onClick={() => setOpen(true)}>
          Contact Us
        </div>
      </header>
      <ContactUsModal open={open} setOpen={setOpen}/>
    </>
  )
}

export default Header