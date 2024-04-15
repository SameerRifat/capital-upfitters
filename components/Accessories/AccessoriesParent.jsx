import React from 'react'
import Accessories from './Accessories'
import CompanyLogosSection from '../Automotive/CompanyLogosSection/CompanyLogosSection'
import RecentWorks from '../Shared/RecentWorks/RecentWorks'
import { fetchPortfolioData } from '@/lib/utils/portfolioUtils'
import GetStarted from '../Shared/GetStarted/GetStarted'
import { getAccessoriesCatalogs } from '@/apis/services'
import AccessoriesCatalogs from './AccessoriesCatalogs/AccessoriesCatalogs'
import { getAccessoriesLogos } from '@/apis/logos'

const AccessoriesParent = async ({ accessoriesData, slug, showPortfolio }) => {
    let accessoriesLogos
    let accessoriesLogosError = null

    try {
        accessoriesLogos = await getAccessoriesLogos();
    } catch (error) {
        accessoriesLogosError = <div className='error_message'>Error fetching data. Please try again later.</div>;
    }
    let accessoriesCatalogs
    let accessoriesCatalogsError = null

    try {
        accessoriesCatalogs = await getAccessoriesCatalogs();
    } catch (error) {
        accessoriesCatalogsError = <div className='error_message'>Error fetching catalogs. Please try again later.</div>;
    }
    const { portfoliosData, portfolioError } = await fetchPortfolioData(slug, showPortfolio);
    return (
        <>
            <Accessories accessoriesData={accessoriesData} />
            {accessoriesLogosError ? (accessoriesLogosError) : <CompanyLogosSection logosData={accessoriesLogos} />}
            {showPortfolio && (
                portfolioError ? (portfolioError) : <div style={{margin: '5rem 0'}}><RecentWorks portfoliosData={portfoliosData} /></div>
            )}
            {accessoriesCatalogsError ? (accessoriesCatalogsError) : <AccessoriesCatalogs catalogsData={accessoriesCatalogs} />}
            <GetStarted />
        </>
    )
}

export default AccessoriesParent