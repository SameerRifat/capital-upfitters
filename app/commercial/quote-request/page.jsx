import { getAllCommercialServices } from '@/apis/commercialServices'
import CommercialQuoteRequest from '@/components/QuoteRequest/CommercialQuoteRequest'
import React from 'react'

export const revalidate = 30

export const metadata = {
    title: "Quote Request",
    description: "Request a quote for automotive services. Fill out the form to get a customized quote for your vehicle.",
}

const page = async () => {
    let data

    try {
        data = await getAllCommercialServices();
    } catch (error) {
        console.error('Error fetching data:', error);
        return <div className='error_message'>Error fetching services. Please try again later.</div>;
    }
    return (
        <>
            <CommercialQuoteRequest services={data} />
        </>
    )
}

export default page