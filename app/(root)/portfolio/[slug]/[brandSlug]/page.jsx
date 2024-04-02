import { getPortfolioByBrand } from '@/apis/portfolio';
import PortfolioGallery from '@/components/Portfolio/PortfolioGallery/PortfolioGallery'
import { projectsData } from '@/mock/portfolio';
import React from 'react'

export const revalidate = 30 

const Gallery = async ({ params }) => {
  let data

  try {
    data = await getPortfolioByBrand(params.brandSlug);
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div className='error_message'>Error fetching data. Please try again later.</div>;
  }
  return (
    <PortfolioGallery data={data} />
  )
}

export default Gallery