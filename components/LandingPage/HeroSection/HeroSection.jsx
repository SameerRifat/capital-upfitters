import React from 'react'
import cx from 'classnames'
import css from './heroSection.module.scss'

const HeroSection = ({ title, description }) => {
    return (
        <div className={css.hero}>
            <h1 className={cx("text_gradient", css.hero_title)}>
                {title}
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
                {description}
            </p>
        </div>
    )
}

export default HeroSection