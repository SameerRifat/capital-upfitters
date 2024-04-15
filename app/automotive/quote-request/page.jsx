import { getAllMakes, getAllModels } from '@/apis/quoteRequest'
import { getAllServices } from '@/apis/services'
import QuoteRequest from '@/components/QuoteRequest/QuoteRequest'
import React from 'react'

export const revalidate = 30

export const metadata = {
    title: "Quote Request",
    description: "Request a quote for automotive services. Fill out the form to get a customized quote for your vehicle.",
}

const page = async () => {
    let data, makeData, modelsData

    try {
        data = await getAllServices();
        makeData = await getAllMakes();
        modelsData = await getAllModels();
    } catch (error) {
        console.error('Error fetching data:', error);
        return <div className='error_message'>Error fetching services. Please try again later.</div>;
    }
    const customizedMakeData = makeData.map((item) => {
        return { value: item.make, label: item.make }
    })
    const customizedModelsData = {};
    modelsData.forEach((item) => {
        if (!customizedModelsData[item.make]) {
            customizedModelsData[item.make] = [];
        }
        customizedModelsData[item.make].push({ value: item.model, label: item.model });
    });

    return (
        <>
            <QuoteRequest services={data} customizedMakeData={customizedMakeData} customizedModelsData={customizedModelsData}/>
        </>
    )
}

export default page