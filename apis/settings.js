import { client } from "@/lib/client";

export async function getHomeData() {
    try {
        const query = `*[_type == 'homePage'][0]{
            title,
            description,
            cards
          }
          `

        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch data");
    }
}
export async function getAutomotiveHeroData() {
    try {
        const query = `*[_type == 'automotiveHero'][0]{
            titleLines,
            description
          }
          `

        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch data");
    }
}
export async function getStats() {
    try {
        const query = `*[_type == 'siteStats'][0]{
            _id,
            customers,
            services,
            years,
          }
          `

        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch stats");
    }
}
export async function getAboutUsData() {
    try {
        const query = `*[_type == 'aboutUs'][0]{
            _id,
            description1,
            description2,
            image
          }
          `

        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch data");
    }
}