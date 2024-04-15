import { getCommercialServiceDetails } from '@/apis/commercialServices';
import ServiceDetails from '@/components/ServiceDetails/ServiceDetails'
import { urlFor } from '@/lib/client';
import React from 'react'

export const revalidate = 30

export async function generateMetadata({ params }) {
  let data;

  try {
    data = await getCommercialServiceDetails(params.slug);

    return {
      title: data?.serviceTitle || "Service Details",
      description: data?.description?.slice(0, 150) || "Explore our services",
      keywords: [data?.serviceTitle, 'service Details'],
      openGraph: {
        title: data?.serviceTitle || "Service Details",
        description: data?.description?.slice(0, 150) || "Explore our services",
        images: [
          {
            url: urlFor(data?.serviceImages[0])?.url() || "/cu-logo.svg",
            width: 800,
            height: 600,
            alt: data?.serviceTitle || "Service Details",
          }
        ],
        type: "website",
        url: `https://capital-upfitters-gray.vercel.app/services/${params.slug}`
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    // Return a default metadata object
    return {
      title: "Service Details",
      description: "Explore our services",
      keywords: ["services"],
      openGraph: {
        title: "Service Details",
        description: "Explore our services",
        images: [
          {
            url: "/cu-logo.svg",
            width: 800,
            height: 600,
            alt: "Service Details",
          },
        ],
        type: "website",
        url: "https://capital-upfitters-gray.vercel.app/services",
      }
    }
  }
}

const page = async ({ params }) => {
  let data;
  try {
    data = await getCommercialServiceDetails(params.slug);
    return <ServiceDetails data={data} />
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div className='error_message'>Error fetching data. Please try again later.</div>;
  }
}

export default page