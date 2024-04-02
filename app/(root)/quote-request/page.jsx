import QuoteRequest from '@/components/QuoteRequest/QuoteRequest'
import PagesLayout from '@/layouts/PagesLayout'
import React from 'react'

export const metadata = {
    title: "Quote Request",
    description: "Request a quote for automotive services. Fill out the form to get a customized quote for your vehicle.",
}

const page = () => {
    return (
        <>
            <PagesLayout pageClass='quote'>
                <QuoteRequest />
            </PagesLayout>
        </>
    )
}

export default page