import { getPortfolio } from '@/apis/portfolio'
import PortfolioProjects from '@/components/Portfolio/PortfolioProjects/PortfolioProjects'
import PagesLayout from '@/layouts/PagesLayout'
import { urlFor } from '@/lib/client'
import React from 'react'

export const revalidate = 30 

const defaultMetadata = {
  title: "Portfolio Projects",
  description: "Explore our portfolio of completed projects. View photos and details of our work in fleet optimization, paint protection film, window tinting, and more.",
};

export async function generateMetadata({params}) {
  let data
  try {
    data = await getPortfolio(params.slug);
  } catch (error) {
    // throw new Error("Error occured");
    return defaultMetadata;
  }

  return {
    title: `Portfolio: ${data[0]?.portfolio?.serviceTitle}`,
    description: "Explore our portfolio of completed projects. View photos and details of our work in fleet optimization, paint protection film, window tinting, and more.",
    keywords: [
      data[0]?.portfolio?.serviceTitle,
      ...data.map((item) => item.brand)
    ],
    openGraph: {
      title: `Portfolio: ${data[0]?.portfolio?.serviceTitle}`,
      description: "Explore our portfolio of completed projects. View photos and details of our work in fleet optimization, paint protection film, window tinting, and more.",
      images: data.map((item) => {
        if (Array.isArray(item.gallery) && item.gallery.length > 0) {
          return {
            url: urlFor(item.gallery[0]).url(),
            width: 800,
            height: 600,
            alt: `${item.brand}`,
          };
        }
        return null;
      }).filter(Boolean),
      type: "website",
      url: `https://capital-upfitters-gray.vercel.app/portfolio/${params.slug}`,
    },
  };
}

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
