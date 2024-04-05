import React from 'react'
import Accessories from './Accessories'
import { getAccessoriesLogos } from '@/apis/testimonial'
import CompanyLogosSection from '../Automotive/CompanyLogosSection/CompanyLogosSection'
import RecentWorks from '../Shared/RecentWorks/RecentWorks'
import { fetchPortfolioData } from '@/lib/utils/portfolioUtils'
import GetStarted from '../Shared/GetStarted/GetStarted'

const AccessoriesParent = async ({ accessoriesData, slug, showPortfolio }) => {
    let accessoriesLogos
    let accessoriesLogosError = null

    try {
        accessoriesLogos = await getAccessoriesLogos();
    } catch (error) {
        accessoriesLogosError = <div className='error_message'>Error fetching data. Please try again later.</div>;
    }
    const { portfoliosData, portfolioError } = await fetchPortfolioData(slug, showPortfolio);
    return (
        <>
            <Accessories accessoriesData={accessoriesData} />
            {accessoriesLogosError ? (accessoriesLogosError) : <CompanyLogosSection logosData={accessoriesLogos} />}
            {showPortfolio && (
                portfolioError ? (portfolioError) : <div style={{margin: '5rem 0'}}><RecentWorks portfoliosData={portfoliosData} /></div>
            )}
            <GetStarted />
        </>
    )
}

export default AccessoriesParent