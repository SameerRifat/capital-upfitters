import { client } from "@/lib/client";

export async function getTestimonials() {
    try {
        const query = `*[_type == 'testimonial' && !isCommercial]{
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
export async function getCommercialTestimonials() {
    try {
        const query = `*[_type == 'testimonial' && isCommercial]{
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