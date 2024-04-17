import { getAllPortfolios } from '@/apis/portfolio'
import { getAccessoriesData, getServiceDetails, getSpecifications, getVehicleTypes, getWindowTintData, getpaintProtectionData } from '@/apis/services'
import AccessoriesParent from '@/components/Accessories/AccessoriesParent'
import PaintProtectionFilm from '@/components/PaintProtectionFilm/PaintProtectionFilm'
import ServiceDetails from '@/components/ServiceDetails/ServiceDetails'
import WindowTint from '@/components/WindowTint/WindowTint'
import { urlFor } from '@/lib/client'
import React from 'react'

export const revalidate = 30

export async function generateMetadata({ params }) {
  let data;

  try {
    data = await getServiceDetails(params.slug);

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
  let data, specificPageData, vehicleTypes, specifications;
  try {
    data = await getServiceDetails(params.slug);

    if (params.slug == 'paint-protection-film') {
      specificPageData = await getpaintProtectionData(data._id)
      specifications = await getSpecifications(data._id)
    } else if (params.slug == 'window-tint') {
      specificPageData = await getWindowTintData(data._id)
      vehicleTypes = await getVehicleTypes(data._id)
      specifications = await getSpecifications(data._id)
    } else if (params.slug == 'accessories') {
      specificPageData = await getAccessoriesData(data._id)
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div className='error_message'>Error fetching data. Please try again later.</div>;
  }

  let content = null;

  if (specificPageData && specificPageData.length > 0) {
    if (params.slug == 'paint-protection-film') {
      content = <PaintProtectionFilm data={specificPageData} specifications={specifications} slug={params.slug} showPortfolio={data.showPortfolio} />
    } else if (params.slug == 'accessories') {
      content = <AccessoriesParent accessoriesData={specificPageData} slug={params.slug} showPortfolio={data.showPortfolio} />;
    } else {
      content = <WindowTint data={specificPageData} vehicleTypes={vehicleTypes} specifications={specifications} slug={params.slug} showPortfolio={data.showPortfolio} />
    }
  } else {
    content = (
      <ServiceDetails data={data} />
    );
  }

  return content;
}

export default page