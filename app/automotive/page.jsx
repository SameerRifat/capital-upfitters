import React from 'react'
import Automotive from '@/components/Automotive/Automotive'

export const revalidate = 30

export const metadata = {
  title: "Capital Upfitters: Automotive",
}

const AutomotivePage = () => {
  return (
    <>
      <Automotive />
    </>
  )
}

export default AutomotivePage