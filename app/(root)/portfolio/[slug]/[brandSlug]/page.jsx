import { getPortfolioByBrand } from '@/apis/portfolio';
import PortfolioGallery from '@/components/Portfolio/PortfolioGallery/PortfolioGallery'
import { projectsData } from '@/mock/portfolio';
import React from 'react'

export const revalidate = 30 // revalidate at most every 30 seconds

const Gallery = async ({ params }) => {
  // const project = projectsData.find((p) => p.slug === params.slug);
  // const car = project.cars.find((c) => c.id === Number(params.id))
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