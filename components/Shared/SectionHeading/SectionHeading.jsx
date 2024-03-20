import React from 'react'
import css from './sectionHeading.module.scss'
import cx from 'classnames'

const SectionHeading = ({ children }) => {
    return (
        <h2 className={cx("typoH2", "text_gradient", css.heading)}>
            {children}
        </h2>
    )
}

export default SectionHeading