import { getPortfolio } from '@/apis/portfolio'
import PortfolioProjects from '@/components/Portfolio/PortfolioProjects/PortfolioProjects'
import PagesLayout from '@/layouts/PagesLayout'
import React from 'react'

export const revalidate = 30 // revalidate at most every 30 seconds

const page = async ({ params }) => {
  let data

  try {
    data = await getPortfolio(params.slug);
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div className='error_message'>Error fetching data. Please try again later.</div>;
  }
  return (
    data.length > 0 ?
    <PagesLayout pageClass='portfolio_slug'>
      <PortfolioProjects projects={data}/>
    </PagesLayout>
    : 
    <div className='error_message'>No data found.</div>
  )
}

export default page