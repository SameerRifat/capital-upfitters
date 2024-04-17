import React from 'react'
import cx from 'classnames'
import Header from './Header/Header'
import HeroSection from './HeroSection/HeroSection'
import CardsSection from './CardsSection/CardsSection'
import { getHomeData } from '@/apis/settings'

export const revalidate = 30

const LandingPage = async () => {
  let homeData
  let homeError = null

  try {
    homeData = await getHomeData();
  } catch (error) {
    homeError = <div className='error_message'>Error fetching data. Please try again later.</div>;
  }
  return (
    <div className={cx("container")}>
      <Header />
      {homeError ? (
        homeError
      ) : (
        Object.keys(homeData).length > 0 && (
          <>
            <HeroSection title={homeData.title} description={homeData.description}/>
            <CardsSection cards={homeData.cards}/>
          </>
        )
      )}
    </div>
  )
}

export default LandingPage