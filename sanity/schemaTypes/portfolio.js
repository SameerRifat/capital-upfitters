import { defineField, defineType } from 'sanity'

const portfolio = defineType({
    name: 'portfolio',
    title: 'Service Portfolio',
    type: 'document',
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
    ],
    preview: {
        select: {
            serviceTitle: 'service.serviceTitle',
            image: 'service.serviceImage'
        },
        prepare(selection) {
            const { serviceTitle, image } = selection
            const title = `${serviceTitle ? serviceTitle : ''} ${serviceTitle ? '-' : ''} Portfolio`;
            return { ...selection, title, media: image };
        },
    },
})


export default portfolio