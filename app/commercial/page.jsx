import React from 'react'
import cx from 'classnames'
import Automotive from '@/components/Automotive/Automotive'
import { getAllCommercialServices } from '@/apis/commercialServices';

export const revalidate = 30 // revalidate at most every 30 seconds

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
      // url: `https://capital-upfitters.com/automotive/services`,
    },
  };
}

const CommercialPage = () => {
  return (
    <>
      <Automotive commercial />
    </>
  )
}

export default CommercialPage