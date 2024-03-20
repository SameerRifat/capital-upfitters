import React from 'react'
import cx from 'classnames'
import css from './heroSection.module.scss'

const HeroSection = () => {
    return (
        <div className={css.hero}>
            <h1 className={cx("text_gradient", css.hero_title)}>
                Capital Auto Upfitters & Protective Coatings
            </h1>
            {/* <div>
                <h1 className={cx("text_gradient", css.hero_title)}>
                    Capital Auto Upfitters & Protective Coatings
                </h1>
                <Image
                    src='/logo3.png'
                    width={55}
                    height={52}
                />
            </div> */}
            <p className={css.hero_desc}>
                Where your journey to overcoming automotive and commercial challenges begins.
                <br />
                Transform your vehicles and structures with our proven solutions, and experience peace of mind knowing you're prepared for anything.
                <br />
                Let Capital Upfitters be the hero in your story of success and longevity.
            </p>
        </div>
    )
}

export default HeroSection