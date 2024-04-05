import { client } from "@/lib/client";

export async function getTestimonials(brandSlug) {
    try {
        const query = `*[_type == 'testimonial']{
            _id,
            name,
            about,
            avatar,
            comment
          }
          `

        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch testimonials");
    }
}
export async function getCompanyLogos() {
    try {
        const query = `*[_type == 'companyLogo']{
            _id,
            companyName,
            image,
          }
          `

        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch company logos");
    }
}
export async function getAccessoriesLogos() {
    try {
        const query = `*[_type == 'accessoriesLogos']{
            _id,
            companyName,
            image,
          }
          `

        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch company logos");
    }
}