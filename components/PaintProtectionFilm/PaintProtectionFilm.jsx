import React from 'react';
import Specifications from '../Shared/Specifications/Specifications';
import RecentWorks from '../Shared/RecentWorks/RecentWorks';
import GetStarted from '../Shared/GetStarted/GetStarted';
import PaintProtectionFilmPackages from './PaintProtectionFilmPackages/PaintProtectionFilmPackages';
import { getAllPortfolios, getPortfolio } from '@/apis/portfolio';
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
