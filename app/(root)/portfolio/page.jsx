import { getAllPortfolios } from '@/apis/portfolio'
import Portfolio from '@/components/Portfolio/Portfolio'
import PagesLayout from '@/layouts/PagesLayout'
import { urlFor } from '@/lib/client'
import React from 'react'

export const revalidate = 30

const defaultMetadata = {
  title: "Our Portfolio",
  description: "Explore our portfolio of completed projects. View photos and details of our work in fleet optimization, paint protection film, window tinting, and more.",
};

export async function generateMetadata() {
  let data
  try {
    data = await getAllPortfolios();
  } catch (error) {
    // throw new Error("Error occured");
    return defaultMetadata;
  }
  return {
    title: "Our Portfolio",
    description: "Explore our portfolio of completed projects. View photos and details of our work in fleet optimization, paint protection film, window tinting, and more.",
    keywords: data.map((item) => item.service.serviceTitle),
    openGraph: {
      title: "Our Portfolio",
      description: "Explore our portfolio of completed projects. View photos and details of our work in fleet optimization, paint protection film, window tinting, and more.",
      images: data.map((item) => {
        return {
          url: urlFor(item.portfolioImage).url(),
          width: 800,
          height: 600,
          alt: `${item.service.serviceTitle}`,
        }
      }),
      type: "website",
      // url: `https://capital-upfitters.com/portfolio`,
    },
  };
}

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
      <Portfolio data={data} />
    </PagesLayout>
  )
}

export default page