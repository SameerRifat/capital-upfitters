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