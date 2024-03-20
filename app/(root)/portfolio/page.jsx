import Portfolio from '@/components/Portfolio/Portfolio'
import PagesLayout from '@/layouts/PagesLayout'
import React from 'react'

const page = () => {
  return (
    <PagesLayout pageClass='portfolio'>
      <Portfolio />
    </PagesLayout>
  )
}

export default page