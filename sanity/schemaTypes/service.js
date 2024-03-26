import { defineField, defineType } from 'sanity'

const service = defineType({
    name: 'service',
    title: 'Services',
    type: 'document',
    fields: [
        defineField({
            name: 'serviceTitle',
            title: 'Service Title',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'serviceTitle',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'serviceImage',
            title: 'Service image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
        }),
        // {
        //     name: 'gallery',
        //     type: 'array',
        //     of: [
        //         { type: 'image', options: { hotspot: true } },
        //         { type: 'file', title: 'Video', accept: 'video/*' }, // Allow video uploads
        //     ],
        //     options: {
        //         layout: 'grid',
        //         hotspot: true,
        //     },
        // },
        defineField({
            name: 'smallDescription',
            title: 'Small Description',
            type: 'text',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'isPublished',
            title: 'Published',
            type: 'boolean',
            description: 'Toggle to publish or unpublish the service on the frontend.',
            initialValue: () => true,
        }),
        defineField({
            name: 'showPortfolio',
            title: 'Show Portfolio',
            type: 'boolean',
            description: 'Toggle to hide the service portfolio.',
            initialValue: () => true,
        }),
    ],
    preview: {
        select: {
            title: 'serviceTitle',
            image: 'serviceImage'
        },
        prepare(selection) {
            const { image, title } = selection

            return {
                media: image,
                title,
            }
        },
    },
})


export default service