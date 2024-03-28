import { defineField, defineType } from 'sanity'

const portfolioVehicles = defineType({
    name: 'portfolioVehicles',
    title: 'Service Portfolio Vehicles',
    type: 'document',
    fields: [
        defineField({
            name: 'portfolio',
            title: 'Portfolio',
            type: 'reference',
            to: { type: 'portfolio' },
            description: 'Select a portfolio',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'brand',
            title: 'Brand Name',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'brandSlug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'brand',
                maxLength: 96,
            },
            validation: Rule => Rule.required(),
        }),
        {
            name: 'gallery',
            type: 'array',
            of: [
                { type: 'image', options: { hotspot: true } }
            ],
            options: {
                layout: 'grid',
                hotspot: true,
            },
            validation: Rule =>
                Rule.required().min(1).error('Minimum of 1 image required'),
        },
        defineField({
            name: 'techniques',
            title: 'Methods & Techniques',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]
        }),
        defineField({
            name: 'details',
            title: 'Objectives & Details',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]
        }),
    ],
    preview: {
        select: {
            brand: 'brand',
            portfolio: 'portfolio.service.serviceTitle',
            // image: 'portfolio.service.serviceImage',
            images: 'gallery',
        },
        prepare(selection) {
            const { portfolio, brand, images } = selection
            const title = `${portfolio ? portfolio : ''} ${portfolio ? '-' : ''} ${brand ? brand : ''} ${brand ? '-' : ''} Vehicles`;
            return { ...selection, title, media: images[0] };
        },
    },
})


export default portfolioVehicles