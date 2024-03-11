import Services from '@/components/Services/Services'
import PagesLayout from '@/layouts/PagesLayout'
import React from 'react'

const page = () => {
  return (
    <>
      <PagesLayout pageClass='services'>
        <Services />
      </PagesLayout>
    </>
  )
}

export default page