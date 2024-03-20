import PortfolioProjects from '@/components/Portfolio/PortfolioProjects/PortfolioProjects'
import PagesLayout from '@/layouts/PagesLayout'
import React from 'react'

const page = ({ params }) => {
  return (
    <PagesLayout pageClass='portfolio_slug'>
      <PortfolioProjects params={params}/>
    </PagesLayout>
  )
}

export default page