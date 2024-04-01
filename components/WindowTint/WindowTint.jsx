import React from 'react'
import GetStarted from '@/components/Shared/GetStarted/GetStarted'
import Specifications from '../Shared/Specifications/Specifications'
// import RecentWorks from '../Shared/RecentWorks/RecentWorks'
import RecentWorks from '@/components/Shared/RecentWorks/RecentWorks'
import WindowTintServices from './WindowTintServices/WindowTintServices'
import { fetchPortfolioData } from '@/lib/utils/portfolioUtils'

export const revalidate = 30; // revalidate at most every 30 seconds

const WindowTint = async ({ data, vehicleTypes, specifications, slug, showPortfolio }) => {
    const { portfoliosData, portfolioError } = await fetchPortfolioData(slug, showPortfolio);

    return (
        <>
            <WindowTintServices data={data} vehicleTypes={vehicleTypes}/>
            <div>
                <Specifications specifications={specifications} />
            </div>
            {/* <RecentWorks /> */}
            {showPortfolio && (
                portfolioError ? (portfolioError) : <RecentWorks portfoliosData={portfoliosData} />
            )}
            <GetStarted />
        </>
    )
}

export default WindowTint