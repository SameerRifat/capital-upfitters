import { getAboutUsData } from '@/apis/settings';
import AboutUs from '@/components/AboutUs/AboutUs'
import { urlFor } from '@/lib/client';
import React from 'react'

export const revalidate = 30

const defaultMetadata = {
  title: "Capital Upfittrs: About Us",
};

export async function generateMetadata() {
  let data
  try {
    data = await getAboutUsData();
  } catch (error) {
    // throw new Error("Error occured");
    return defaultMetadata;
  }
  return {
    title: "Capital Upfittrs: About Us",
    description: data?.description1,
    keywords: [
      'Automotive',
      'Commercial',
      'Automotive Service',
      'Commercial Services',
      'Capital Upfitters',
      'Capital Upfittrs: About Us',
      'About Us'
    ],
    openGraph: {
      title: "Capital Upfittrs: About Us",
      description: data?.description1,
      images: [
        {
          url: urlFor(data.image).url(),
          width: 800,
          height: 600,
          alt: "About Us"
        },
      ],
      type: "website",
      // url: `https://capital-upfitters.com/commercial/about-us`,
    },
  };
}

const page = () => {
  return (
    <>
      <AboutUs />
    </>
  )
}

export default page