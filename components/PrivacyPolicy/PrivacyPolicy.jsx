import React from 'react'
import css from './privacyPolicy.module.scss'
import { SectionHeadingLarge } from '../Shared/SectionHeading/SectionHeading'
import cx from 'classnames'
import { PortableText } from '@portabletext/react'

const PrivacyPolicy = ({ data }) => {
    const { title, details } = data
    return (
        <div className={css.privacy_policy_container}>
            <SectionHeadingLarge>
                {title}
            </SectionHeadingLarge>
            <div className={cx("portableTextWrapper", css.details)}>
                <PortableText value={details} />
            </div>
        </div>
    )
}

export default PrivacyPolicy