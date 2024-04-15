import { defineField, defineType } from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

const portfolio = defineType({
    name: 'portfolio',
    title: 'Service Portfolio',
    type: 'document',
    orderings: [orderRankOrdering],
    fields: [
        defineField({
            name: 'service',
            title: 'Service',
            type: 'reference',
            to: { type: 'service' },
            description: 'Select a service'
        }),
        defineField({
            name: 'portfolioImage',
            title: 'Portfolio image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
        }),
        orderRankField({ type: "portfolio" }),
    ],
    preview: {
        select: {
            serviceTitle: 'service.serviceTitle',
            // image: 'service.serviceImage'
            image: 'portfolioImage'
        },
        prepare(selection) {
            const { serviceTitle, image } = selection
            const title = `${serviceTitle ? serviceTitle : ''} ${serviceTitle ? '-' : ''} Portfolio`;
            return { ...selection, title, media: image };
        },
    },
})


export default portfolio