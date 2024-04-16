import { getPrivacyPolicyData } from '@/apis/settings';
import PrivacyPolicy from '@/components/PrivacyPolicy/PrivacyPolicy';
import React from 'react'

export const revalidate = 30

const defaultMetadata = {
    title: "Capital Upfittrs: Privacy Policy",
};

const page = async () => {
    try {
        const data = await getPrivacyPolicyData();
        return <PrivacyPolicy data={data} />
    } catch (error) {
        console.error('Error fetching data:', error);
        return <div className='error_message'>Error fetching data. Please try again later.</div>;
    }
}

export default page