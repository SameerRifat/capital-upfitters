import { getAllCommercialPortfolios } from '@/apis/portfolio'
import Portfolio from '@/components/Portfolio/Portfolio'
import { urlFor } from '@/lib/client'
import React from 'react'

export const revalidate = 30

const defaultMetadata = {
  title: "Our Portfolio",
  description: "Explore our portfolio of completed projects. View photos and details of our work in School Bus Fleets, Electric Power Grids Protection, Field Generators, Eergency Equipments, and more.",
};

export async function generateMetadata() {
  let data
  try {
    data = await getAllCommercialPortfolios();
  } catch (error) {
    // throw new Error("Error occured");
    return defaultMetadata;
  }
  return {
    title: "Our Portfolio",
    description: "Explore our portfolio of completed projects. View photos and details of our work in School Bus Fleets, Electric Power grid protection, Field Generators, Emergency Equipments, and more.",
    keywords: data.map((item) => item.service.serviceTitle),
    openGraph: {
      title: "Our Portfolio",
      description: "Explore our portfolio of completed projects. View photos and details of our work in School Bus Fleets, Electric Power grid protection, Field Generators, Emergency Equipments, and more.",
      images: data.map((item) => {
        return {
          url: urlFor(item.portfolioImage).url(),
          width: 800,
          height: 600,
          alt: `${item.service.serviceTitle}`,
        }
      }),
      type: "website",
      // url: `https://capital-upfitters-gray.vercel.app/commercial/portfolio`,
    },
  };
}

const page = async () => {
  let data

  try {
    data = await getAllCommercialPortfolios();
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div className='error_message'>Error fetching data. Please try again later.</div>;
  }


  return (
    <Portfolio data={data} commercial/>
  )
}

export default page