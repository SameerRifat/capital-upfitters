import Services from '@/components/Services/Services'
import PagesLayout from '@/layouts/PagesLayout'
import { client } from '@/lib/client'
import React from 'react'

export const revalidate = 30 // revalidate at most every 30 seconds

async function getData() {
  const query = `*[_type == 'service' && isPublished] | order(_createdAt desc){
    serviceTitle,
    serviceImage,
    smallDescription,
    'slug': slug.current,
    _id,
    isPublished
}`

  const data = await client.fetch(query);
  return data;
}

const page = async () => {
  const data = await getData();
  return (
    <>
      <PagesLayout pageClass='services'>
        <Services servicesData={data} />
      </PagesLayout>
    </>
  )
}

export default page