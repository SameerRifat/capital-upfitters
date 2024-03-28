import React from 'react'
import css from './statsSection.module.scss'
import cx from 'classnames'

export const revalidate = 30 // revalidate at most every 30 seconds

const StatsSection = ({ statsData }) => {
    const {customers, services, years} = statsData
    return (
        <section className={css.states_container}>
            <div className={css.state}>
                <h3 className={cx("typoH3", css.state_number)}>
                    {customers}+
                </h3>
                <p className={cx("typoBody1", css.state_category)}>
                    Customers
                </p>
            </div>
            <div className={css.divider} />
            <div className={css.state}>
                <h3 className={cx("typoH3", css.state_number)}>
                {services}+
                </h3>
                <p className={cx("typoBody1", css.state_category)}>
                    Services
                </p>
            </div>
            <div className={css.divider} />
            <div className={css.state}>
                <h3 className={cx("typoH3", css.state_number)}>
                {years}+ Years
                </h3>
                <p className={cx("typoBody1", css.state_category)}>
                    OF SUCCEsS
                </p>
            </div>
        </section>
    )
}

export default StatsSection