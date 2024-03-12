import React from 'react'
import css from './quoteForm.module.scss'
import cx from 'classnames'
import Iconify from '@/components/iconify/iconify'
import Image from 'next/image'

const Success = () => {
    return (
        <section className={css.success_wrapper}>
            <div className={css.tick_icon}>
                <Image
                    src="/tick.svg"
                    alt='icon'
                    width={140}
                    height={140}
                />
            </div>
            <h1 className={cx("typoH1", "text_gradient", css.thanks_heading)}>
                Thanks for {" "}
                <br />
                Submission
            </h1>
        </section>
    )
}

export default Success