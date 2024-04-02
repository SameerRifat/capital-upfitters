import React from 'react'
import Automotive from '@/components/Automotive/Automotive'
import PagesLayout from '@/layouts/PagesLayout'

export const revalidate = 30 

const AutomotivePage = () => {
  return (
    <>
      <PagesLayout pageClass='automotive'>
        <Automotive />
      </PagesLayout>
    </>
  )
}

export default AutomotivePage