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
            title,
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
export async function getCommercialHeroData() {
    try {
        const query = `*[_type == 'commercialHero'][0]{
            title,
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
export async function getCommercialStats() {
    try {
        const query = `*[_type == 'commercialStats'][0]{
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
export async function getPrivacyPolicyData() {
    try {
        const query = `*[_type == 'privacyPolicy'][0]{
            title,
            details
        }
          `

        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch data");
    }
}
export async function getTermsAndConditionsData() {
    try {
        const query = `*[_type == 'termsAndConditions'][0]{
            title,
            details
        }
          `

        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch data");
    }
}
export async function getFooterText() {
    try {
        const query = `*[_type == 'footerText'][0]{
            text
        }
          `

        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch data");
    }
}
export async function getEmailHeadingData() {
    try {
        const query = `*[_type == 'emailHeading'][0]{
            heading
        }
          `

        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch data");
    }
}