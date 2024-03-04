import React from 'react'
import css from './statesSection.module.scss'
import cx from 'classnames'

const StatesSection = () => {
    return (
        <section className={css.states_container}>
            <div className={css.state}>
                <h3 className={cx("typoH3", css.state_number)}>
                    3800+
                </h3>
                <p className={cx("typoBody1", css.state_category)}>
                    Customers
                </p>
            </div>
            <div className={css.divider} />
            <div className={css.state}>
                <h3 className={cx("typoH3", css.state_number)}>
                    230+
                </h3>
                <p className={cx("typoBody1", css.state_category)}>
                    Services
                </p>
            </div>
            <div className={css.divider} />
            <div className={css.state}>
                <h3 className={cx("typoH3", css.state_number)}>
                    3 Years
                </h3>
                <p className={cx("typoBody1", css.state_category)}>
                    OF SUCCEsS
                </p>
            </div>
        </section>
    )
}

export default StatesSection