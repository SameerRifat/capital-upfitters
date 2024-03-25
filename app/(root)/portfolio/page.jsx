import { getAllPortfolios } from '@/apis/portfolio'
import Portfolio from '@/components/Portfolio/Portfolio'
import PagesLayout from '@/layouts/PagesLayout'
import React from 'react'

export const revalidate = 30 // revalidate at most every 30 seconds

const page = async () => {
  let data

  try {
    data = await getAllPortfolios();
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div className='error_message'>Error fetching data. Please try again later.</div>;
  }


  return (
    <PagesLayout pageClass='portfolio'>
      <Portfolio data={data}/>
    </PagesLayout>
  )
}

export default page