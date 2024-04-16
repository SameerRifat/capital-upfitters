import React from 'react'
import Automotive from '@/components/Automotive/Automotive'
import { urlFor } from '@/lib/client';

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
      // url: `https://capital-upfitters.com/automotive/services`,
    },
  };
}

const AutomotivePage = () => {
  return (
    <>
      <Automotive />
    </>
  )
}

export default AutomotivePage