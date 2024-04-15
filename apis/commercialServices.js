import { client } from "@/lib/client";

export async function getAllCommercialServices() {
    try {
        const query = `*[_type == 'commercialServices' && isPublished] | order(orderRank){
            serviceTitle,
            serviceImages,
            description,
            details,
            assets {
                assetsTitle,
                assetsDescription,
                "assetsURLs": assetsDocuments[].asset->url,
            },
            tooltipDescription,
            'slug': slug.current,
            _id,
            isPublished,
            showPortfolio
        }`

        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch services");
    }
}

export async function getCommercialServiceDetails(slug) {
    try {
        const query = `*[_type == 'commercialServices' && slug.current == '${slug}'][0]{
            serviceTitle,
            serviceImages,
            description,
            details,
            assets {
                assetsTitle,
                assetsDescription,
                "assetsURLs": assetsDocuments[].asset->url,
            },
            tooltipDescription,
            'slug': slug.current,
            _id,
            isPublished,
            showPortfolio
        }`

        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch services");
    }
}