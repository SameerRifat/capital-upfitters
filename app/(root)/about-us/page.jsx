import AboutUs from '@/components/AboutUs/AboutUs'
import PagesLayout from '@/layouts/PagesLayout'
import React from 'react'

const page = () => {
  return (
    <>
      <PagesLayout pageClass='about'>
        <AboutUs />
      </PagesLayout>
    </>
  )
}

export default page