import React from 'react';
import Specifications from '@/components/Shared/Specifications/Specifications';
import RecentWorks from '@/components/Shared/RecentWorks/RecentWorks';
import GetStarted from '@/components/Shared/GetStarted/GetStarted';
import PaintProtectionFilmPackages from './PaintProtectionFilmPackages/PaintProtectionFilmPackages';
import { fetchPortfolioData } from '@/lib/utils/portfolioUtils';

export const revalidate = 30; // revalidate at most every 30 seconds

const PaintProtectionFilm = async ({ data, specifications, slug, showPortfolio }) => {
    const { portfoliosData, portfolioError } = await fetchPortfolioData(slug, showPortfolio);

    return (
        <>
            <PaintProtectionFilmPackages data={data} />
            <Specifications specifications={specifications} />
            {showPortfolio && (
                portfolioError ? (portfolioError) : <RecentWorks portfoliosData={portfoliosData} />
            )}
            <GetStarted />
        </>
    );
};

export default PaintProtectionFilm;
