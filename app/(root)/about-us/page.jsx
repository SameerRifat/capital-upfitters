import AboutUs from '@/components/AboutUs/AboutUs'
import PagesLayout from '@/layouts/PagesLayout'
import React from 'react'

export const revalidate = 30 

export const metadata = {
  title: "About Us",
}

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