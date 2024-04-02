import { getAllPortfolios } from '@/apis/portfolio'
import { getServicesData, getSpecifications, getVehicleTypes, getWindowTintData, getpaintProtectionData } from '@/apis/services'
import PaintProtectionFilm from '@/components/PaintProtectionFilm/PaintProtectionFilm'
import ServiceDetails from '@/components/ServiceDetails/ServiceDetails'
import WindowTint from '@/components/WindowTint/WindowTint'
import PagesLayout from '@/layouts/PagesLayout'
import { urlFor } from '@/lib/client'
import React from 'react'

export const revalidate = 30

export async function generateMetadata({ params }) {
  let data
  try {
    data = await getServicesData(params.slug);
  } catch (error) {
    // throw new Error("Error occured");
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
        // url: "https://example.com/services",
      },
    };
  }
  return {
    title: data?.serviceTitle,
    description: data?.smallDescription.slice(0, 150),
    keywords: [
      `${data?.serviceTitle}`,
      'service Details'
    ],
    openGraph: {
      title: data?.serviceTitle,
      description: data?.smallDescription.slice(0, 150),
      images: [
        {
          url: urlFor(data?.serviceImage).url(),
          width: 800,
          height: 600,
          alt: `${data?.serviceTitle}`,
        }
      ],
      type: "website",
      // url: `https://capital-upfitters.com/services/${params.slug}`
    },
  };
}

const page = async ({ params }) => {
  let data, specificPageData, vehicleTypes, specifications;
  try {
    data = await getServicesData(params.slug);

    if (params.slug == 'paint-protection-film') {
      specificPageData = await getpaintProtectionData(data._id)
      specifications = await getSpecifications(data._id)
    } else if (params.slug == 'window-tint') {
      specificPageData = await getWindowTintData(data._id)
      vehicleTypes = await getVehicleTypes(data._id)
      specifications = await getSpecifications(data._id)
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div className='error_message'>Error fetching data. Please try again later.</div>;
  }

  return (
    <>
      {specificPageData && specificPageData.length > 0 ? (
        params.slug == 'paint-protection-film' ? (
          <PagesLayout pageClass='service_details'>
            <PaintProtectionFilm data={specificPageData} specifications={specifications} slug={params.slug} showPortfolio={data.showPortfolio} />
            {/* Paint Protections */}
          </PagesLayout>
        ) : (
          <PagesLayout pageClass='window_tint'>
            <WindowTint data={specificPageData} vehicleTypes={vehicleTypes} specifications={specifications} slug={params.slug} showPortfolio={data.showPortfolio} />
          </PagesLayout>
        )
      ) : (
        <PagesLayout pageClass='service_details'>
          <ServiceDetails data={data} />
        </PagesLayout>
      )}
    </>
  )
}

export default page