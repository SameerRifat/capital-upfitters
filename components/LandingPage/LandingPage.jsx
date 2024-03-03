import React from 'react'
import cx from 'classnames'
import css from './landingPage.module.scss'
import Header from './Header/Header'
import HeroSection from './HeroSection/HeroSection'
import CardsSection from './CardsSection/CardsSection'

const LandingPage = () => {
  return (
    <div className={cx("container")}>
        <Header />
        <HeroSection />
        <CardsSection />
    </div>
  )
}

export default LandingPage