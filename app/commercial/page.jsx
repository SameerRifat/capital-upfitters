import React from 'react'
import cx from 'classnames'
import Automotive from '@/components/Automotive/Automotive'

export const revalidate = 30 // revalidate at most every 30 seconds

export const metadata = {
  title: "Capital Upfitters: Commercial Industries",
}

const CommercialPage = () => {
  // const commercialeHeroData = [
  //   {
  //     serviceImage: '/other-industries/SchoolBus-Fleet.jpeg',
  //     serviceTitle: 'Electric Power Grids Protection',
  //     description: 'Crafted by veterans and proudly made in America, Patriot Liner carries more than 30 years of industry experience.',
  //   },
  //   {
  //     serviceImage: '/other-industries/Equipment-rental.jpg',
  //     serviceTitle: 'Rental Equipment',
  //     description: 'We take pride in being one of the select shops in the DMV Area that can offer Receiver Hitch Solutions almost for every vehicle.',
  //   },
  //   {
  //     serviceImage: '/other-industries/kohler-generator.jpg',
  //     serviceTitle: 'Field Generators, Emergency Equipment',
  //     description: "Anti Corrosion Clear Coat acts as an unbreakable chemical shield that prolongs the lifespan of the surface it's applied on.",
  //   },
  // ]
  return (
    <>
      <Automotive commercial />
    </>
  )
}

export default CommercialPage