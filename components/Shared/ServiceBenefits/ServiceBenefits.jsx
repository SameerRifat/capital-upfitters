import React from 'react'
import css from './serviceBenefits.module.scss'
import cx from 'classnames'
import Iconify from '@/components/iconify/iconify'

const ServiceBenefits = ({ benefits, befitsDescription }) => {
    return (
        <>
            <div className={css.horizontal_divider}>
                <img
                    src='/window-tint-divider3.png'
                    alt='image'
                />
            </div>
            <div className={css.service_benefits_wrapper}>
                <h3 className={cx("typoH3", "text_gradient")}>
                    What you gets
                </h3>
                <div className={css.benefits}>
                    <div className={css.benefits_left}>
                        {benefits?.map((item, ind) => (
                            <div key={ind}>
                                <span className={css.check_icon}>
                                    <Iconify
                                        icon="mdi:tick"
                                    />
                                </span>
                                <p className={cx("typoBody2", css.benefit)} key={ind}>
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className={css.gradient_divider} />
                    <div className={css.benefits_right}>
                        <p className={cx("typoBody1", css.service_description)}>
                            {befitsDescription}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceBenefits