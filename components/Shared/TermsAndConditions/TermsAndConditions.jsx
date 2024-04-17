import React from 'react'
import css from './termsAndConditions.module.scss'
import { SectionHeadingLarge } from '@/components/Shared/SectionHeading/SectionHeading'
import cx from 'classnames'
import { PortableText } from '@portabletext/react'

const TermsAndConditions = ({ data }) => {
    const { title, details } = data
    return (
        <div className={css.terms_conditions_container}>
            <SectionHeadingLarge>
                {title}
            </SectionHeadingLarge>
            <div className={cx("portableTextWrapper", css.details)}>
                <PortableText value={details} />
            </div>
        </div>
    )
}

export default TermsAndConditions