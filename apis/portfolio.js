import { client } from "@/lib/client";

export const revalidate = 30

export async function getAllPortfolios() {
    try {
        const query = `*[_type == 'portfolio'] | order(orderRank){
            service->{serviceTitle, 'slug': slug.current, _id},
            portfolioImage
          }`

        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch portfolios");
    }
}
export async function getAllCommercialPortfolios(){
    try {
        const query = `*[_type == 'commercialPortfolio'] | order(orderRank){
            service->{serviceTitle, 'slug': slug.current, _id},
            portfolioImage
          }`

        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch portfolios");
    }
}
export async function getPortfolio(slug) {
    try {
        const query = `*[_type == 'portfolioVehicles' && defined(portfolio) && defined(portfolio->service) && portfolio->service->slug.current == '${slug}']{
            'portfolio': portfolio->{
                'slug': service->slug.current,
                '_id': service->_id,
                'serviceTitle': service->serviceTitle
              },
              brand,
              'brandSlug': brandSlug.current,
              gallery,
              techniques,
              details,
              _id
          }
          `

        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch portfolios");
    }
}
export async function getPortfolioByBrand(brandSlug) {
    try {
        const query = `*[_type == 'portfolioVehicles' && brandSlug.current == '${brandSlug}'][0]{
            'portfolio': portfolio->{
                'slug': service->slug.current,
                '_id': service->_id,
                'serviceTitle': service->serviceTitle
            },
            brand,
           'brandSlug': brandSlug.current,
            gallery,
            techniques,
            details,
           _id
          }
          `

        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch portfolio");
    }
}