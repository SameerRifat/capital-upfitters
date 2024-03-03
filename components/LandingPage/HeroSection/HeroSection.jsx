import React from 'react'
import cx from 'classnames'
import css from './heroSection.module.scss'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <div className={css.hero}>
            <div>
                <h1 className={cx("text_gradient", css.hero_title)}>
                    Unleash the Upfitters
                </h1>
                <Image
                    src='/logo3.png'
                    width={55}
                    height={52}
                />
            </div>
            <p className={css.hero_desc}>
                Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto
                <br />
                customization, vehicle preservation, and performance enhancements
            </p>
        </div>
    )
}

export default HeroSection