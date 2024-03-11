import QuoteRequest from '@/components/QuoteRequest/QuoteRequest'
import PagesLayout from '@/layouts/PagesLayout'
import React from 'react'

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