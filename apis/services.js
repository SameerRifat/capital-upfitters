import { client } from "@/lib/client";


export async function getAllServices() {
    try {
        const query = `*[_type == 'service' && isPublished] | order(orderRank){
            serviceTitle,
            serviceImage,
            serviceImages,
            description,
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
export async function getServiceDetails(slug) {
    try {
        const query = `*[_type == 'service' && slug.current == '${slug}'][0]{
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
export async function getpaintProtectionData(id) {
    try {
        const query = `*[_type == 'paintProtectionService' && service._ref == '${id}']{
            _id,
            package,
            'serviceId': service._ref,
            packageImage,
            benefits,
            benefitsDescription,
            packageDescription
          }`

        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch services");
    }
}
export async function getWindowTintData(id) {
    try {
        const query = `*[_type == 'windowTintService' && service._ref == '${id}']{
        _id,
        vehicleType->{vehicleName},
        tintType,
        vehicleImage,
        charges,
        benefits,
        benefitsDescription,
        'serviceId': service._ref,
      }`

        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch services");
    }
}
export async function getVehicleTypes(id) {
    try {
        const query = `*[_type == 'vehicleType']{
            vehicleName,
            _id
          }`

        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch data");
    }
}
export async function getSpecifications(id) {
    try {
        const query = `*[_type == 'specification' && service._ref == '${id}']{
            _id,
            title,
            service->{serviceTitle, _id},
            description,
            image,
            detail,
          }`

        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch specifications");
    }
}

export async function getAccessoriesData() {
    try {
        const query = `*[_type == 'accessories'] |order(orderRank){
            _id,
            accessoryName,
            accessoryImage,
            details
          }`

        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch accessories");
    }
}

export async function getAccessoriesCatalogs() {
    try {
        const query = `*[_type == 'accessoriesCatalogs'] | order(orderRank){
            _id,
            image,
            link
          }`

        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch accessories catalogs");
    }
}