import { getTermsAndConditionsData } from '@/apis/settings';
import TermsAndConditions from '@/components/Shared/TermsAndConditions/TermsAndConditions';
import React from 'react'

export const revalidate = 30

const defaultMetadata = {
    title: "Capital Upfittrs: Terms and Conditions",
};

const page = async () => {
    try {
        const data = await getTermsAndConditionsData();
        return <TermsAndConditions data={data} />
    } catch (error) {
        console.error('Error fetching data:', error);
        return <div className='error_message'>Error fetching data. Please try again later.</div>;
    }
}

export default page