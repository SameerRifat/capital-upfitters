import React from 'react'
import css from './portfolioDetails.module.scss'
import cx from 'classnames'
import { PortableText } from '@portabletext/react'

const PortfolioDetails = ({ data }) => {
    const { brand, portfolio, details, techniques } = data
    return (
        <div className={css.details_wrapper}>
            <div className={css.details_left}>
                <div className={css.company_info}>
                    <h3 className={cx("typoH3", "text_gradient", css.heading)}>
                        {portfolio.serviceTitle}: {brand}
                    </h3>
                    <p className={cx("typoSubtitle1")}>
                        Services: {portfolio.serviceTitle}
                        <br />
                        Company: {brand}
                        <br />
                        Phone: 301-304-1419
                    </p>
                </div>
                <div>
                    <h3 className={cx("typoH3", "text_gradient", css.heading)}>
                        Methods & Techniques
                    </h3>
                    <div className={cx("portableTextWrapper")}>
                        <PortableText value={techniques} />
                    </div>
                </div>
            </div>
            <div className={css.details_right}>
                <h3 className={cx("typoH3", "text_gradient", css.heading)}>
                    Quick Overview
                </h3>
                <div className={cx("portableTextWrapper")}>
                    <PortableText value={details} />
                </div>
            </div>
        </div>
    )
}

export default PortfolioDetails