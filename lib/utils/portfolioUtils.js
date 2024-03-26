import { getAllPortfolios, getPortfolio } from '@/apis/portfolio';

export const fetchPortfolioData = async (slug, showPortfolio) => {
    let portfoliosData = [];
    let portfolioError = null;

    if (showPortfolio) {
        try {
            portfoliosData = await getPortfolio(slug);
            if (portfoliosData.length === 0) {
                portfoliosData = await getAllPortfolios();
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            portfolioError = <div className='error_message'>Error fetching data. Please try again later.</div>;
            portfoliosData = [];
        }
    }

    return { portfoliosData, portfolioError };
};
