import { getAllServices } from '@/apis/services'
import Services from '@/components/Services/Services'
import { client, urlFor } from '@/lib/client'
import React from 'react'

export const revalidate = 30

const defaultMetadata = {
  title: "Automotive Services",
  description: "Explore our Automotive Services",
  keywords: [],
  openGraph: {
    title: "Automotive Services",
    description: "Explore our Automotive Services",
    images: [],
    type: "website",
  },
};

export async function generateMetadata() {
  let data
  try {
    data = await getAllServices();
  } catch (error) {
    // throw new Error("Error occured");
    return defaultMetadata;
  }
  return {
    title: "Automotive Services",
    description: "Explore our Automotive Services",
    keywords: data.map((item) => item.serviceTitle),
    openGraph: {
      title: "Automotive Services",
      description: "Explore our Automotive Services",
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
    data = await getAllServices();
    return <Services servicesData={data} />
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div className='error_message'>Error fetching data. Please try again later.</div>;
  }
}

export default page