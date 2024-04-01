import { getAllServices } from '@/apis/services'
import Services from '@/components/Services/Services'
import PagesLayout from '@/layouts/PagesLayout'
import { client } from '@/lib/client'
import React from 'react'

export const revalidate = 30 // revalidate at most every 30 seconds

const page = async () => {
  let data

  try {
    data = await getAllServices();
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div className='error_message'>Error fetching data. Please try again later.</div>;
  }
  return (
    <>
      <PagesLayout pageClass='services'>
        <Services servicesData={data} />
      </PagesLayout>
    </>
  )
}

export default page