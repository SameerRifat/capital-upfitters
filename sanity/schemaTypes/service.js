import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';
import { defineField, defineType } from 'sanity'

const service = defineType({
    name: 'service',
    title: 'Services',
    type: 'document',
    orderings: [orderRankOrdering],
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
        // defineField({
        //     name: 'priority',
        //     title: 'Priority',
        //     type: 'number',
        //     validation: Rule => Rule.required(),
        //     initialValue: 0,
        //     description: 'Lower values indicate higher priority, meaning the service will be shown earlier in the list.',
        // }),
        orderRankField({ type: "service" }),
    ],
    preview: {
        select: {
            title: 'serviceTitle',
            image: 'serviceImage',
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