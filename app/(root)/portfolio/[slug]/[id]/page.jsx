import PortfolioGallery from '@/components/Portfolio/PortfolioGallery/PortfolioGallery'
import { projectsData } from '@/mock/portfolio';
import React from 'react'

const Gallery = ({ params }) => {
  const project = projectsData.find((p) => p.slug === params.slug);
  const car = project.cars.find((c) => c.id === Number(params.id))
  return (
    <PortfolioGallery gallery={car?.gallery} title={car?.brand} params={params}/>
  )
}

export default Gallery