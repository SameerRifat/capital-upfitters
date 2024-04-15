import AboutUs from '@/components/AboutUs/AboutUs'
import React from 'react'

export const revalidate = 30

export const metadata = {
  title: "About Us",
}

const page = () => {
  return (
    <>
      <AboutUs />
    </>
  )
}

export default page