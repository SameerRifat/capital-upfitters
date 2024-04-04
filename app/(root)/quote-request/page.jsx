import { getAllServices } from '@/apis/services'
import QuoteRequest from '@/components/QuoteRequest/QuoteRequest'
import PagesLayout from '@/layouts/PagesLayout'
import React from 'react'

export const metadata = {
    title: "Quote Request",
    description: "Request a quote for automotive services. Fill out the form to get a customized quote for your vehicle.",
}

const page = async () => {
    let data

    try {
        data = await getAllServices();
    } catch (error) {
        console.error('Error fetching data:', error);
        return <div className='error_message'>Error fetching services. Please try again later.</div>;
    }
    return (
        <>
            <PagesLayout pageClass='quote'>
                <QuoteRequest services={data}/>
            </PagesLayout>
        </>
    )
}

export default page