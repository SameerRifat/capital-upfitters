import { getAllCommercialServices } from '@/apis/commercialServices'
import Services from '@/components/Services/Services'
import { urlFor } from '@/lib/client';
import React from 'react'

export const revalidate = 30

const defaultMetadata = {
  title: "Commercial Services",
  description: "Explore our Commercial Services",
  keywords: [],
  openGraph: {
    title: "Commercial Services",
    description: "Explore our Commercial Services",
    images: [],
    type: "website",
  },
};

export async function generateMetadata() {
  let data
  try {
    data = await getAllCommercialServices();
  } catch (error) {
    // throw new Error("Error occured");
    return defaultMetadata;
  }
  return {
    title: "Commercial Services",
    description: "Explore our Commercial Services",
    keywords: data.map((item) => item.serviceTitle),
    openGraph: {
      title: "Commercial Services",
      description: "Explore our Commercial Services",
      images: data.slice(0, 3).map((item) => {
        return {
          url: urlFor(item.serviceImages[0]).url(),
          width: 800,
          height: 600,
          alt: `${item.serviceTitle}`,
        }
      }),
      type: "website",
      // url: `https://capital-upfitters.com/services`,
    },
  };
}

const page = async () => {
  let data

  try {
    data = await getAllCommercialServices();
    return <Services servicesData={data} commercial/>
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div className='error_message'>Error fetching data. Please try again later.</div>;
  }
}

export default page