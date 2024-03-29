import React from 'react'
import cx from 'classnames'
import Automotive from '@/components/Automotive/Automotive'
import PagesLayout from '@/layouts/PagesLayout'

export const revalidate = 30 // revalidate at most every 30 seconds

const CommercialPage = () => {
  const commercialeHeroData = {
    title: [
      'Explore what we',
      'got in Commercial'
    ],
    description: 'Located in the heart of DMV, family-owned epicenter of top-tier auto customization, vehicle preservation, performance enhancements, and protective coatings. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors.',
    explore_more_link: '#',
    cards: [
        {
            image: '/other-industries/SchoolBus-Fleet.jpeg',
            title: 'Electric Power Grids Protection',
            caption: 'Crafted by veterans and proudly made in America, Patriot Liner carries more than 30 years of industry experience.',
        },
        {
            image: '/other-industries/Equipment-rental.jpg',
            title: 'Rental Equipment',
            caption: 'We take pride in being one of the select shops in the DMV Area that can offer Receiver Hitch Solutions almost for every vehicle.',
        },
        {
            image: '/other-industries/kohler-generator.jpg',
            title: 'Field Generators, Emergency Equipment',
            caption: "Anti Corrosion Clear Coat acts as an unbreakable chemical shield that prolongs the lifespan of the surface it's applied on.",
        },
    ],
};
  return (
    <>
      <PagesLayout pageClass='automotive'>
        <Automotive heroData={commercialeHeroData} />
      </PagesLayout>
    </>
  )
}

export default CommercialPage