import { client } from "@/lib/client";

export async function getAllMakes() {
    try {
        const query = `*[_type == 'make']{
            _id,
            make
        }`

        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch make");
    }
}
export async function getAllModels() {
    try {
        const query = `*[_type == 'models']{
            _id,
            'make': make->make,
             'makeId': make->_id,
            model
       }`

        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch models");
    }
}