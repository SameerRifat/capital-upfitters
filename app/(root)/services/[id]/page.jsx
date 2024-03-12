import ServiceDetails from '@/components/ServiceDetails/ServiceDetails'
import PagesLayout from '@/layouts/PagesLayout'
import React from 'react'

const page = ({ params }) => {
    return (
        <>
            <PagesLayout pageClass='service_details'>
                <ServiceDetails serviceName={params.id} />
            </PagesLayout>
        </>
    )
}

export default page