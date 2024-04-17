import { getPortfolioByBrand } from '@/apis/portfolio';
import PortfolioGallery from '@/components/Portfolio/PortfolioGallery/PortfolioGallery'
import { urlFor } from '@/lib/client';
import React from 'react'

export const revalidate = 30 

const defaultMetadata = {
  title: "Portfolio Projects",
  description: "Explore our portfolio of completed projects. View photos and details of our work in fleet optimization, paint protection film, window tinting, and more.",
};

export async function generateMetadata({params}) {
  let data
  try {
    data = await getPortfolioByBrand(params.brandSlug);
  } catch (error) {
    // throw new Error("Error occured");
    return defaultMetadata;
  }

  return {
    title: `Portfolio: ${data?.portfolio?.serviceTitle} / ${data?.brand}`,
    description: "Explore our portfolio of completed projects. View photos and details of our work in fleet optimization, paint protection film, window tinting, and more.",
    keywords: [
      data?.portfolio?.serviceTitle,
      data?.brand
    ],
    openGraph: {
      title: `Portfolio: ${data?.portfolio?.serviceTitle} / ${data?.brand}`,
      description: "Explore our portfolio of completed projects. View photos and details of our work in fleet optimization, paint protection film, window tinting, and more.",
      images: data?.gallery?.map((item) => {
        return {
          url: urlFor(item).url(),
          width: 800,
          height: 600,
          alt: `${data?.brand}`,
        };
      }) || [],
      type: "website",
      url: `https://capital-upfitters-gray.vercel.app/portfolio/${params.slug}/${params.brandSlug}`,
    },
  };
}

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