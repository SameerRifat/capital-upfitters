import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';
import { defineField, defineType } from 'sanity'

const service = defineType({
    name: 'service',
    title: 'Automotive Services',
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
        // defineField({
        //     name: 'serviceImage',
        //     title: 'Service image',
        //     type: 'image',
        //     options: {
        //         hotspot: true,
        //     },
        //     validation: Rule => Rule.required(),
        // }),
        defineField({
            name: 'serviceImages',
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
        }),
        defineField({
            name: 'description',
            title: 'Service description',
            type: 'text',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'details',
            title: 'Service Details',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'detailTitle',
                            title: 'Detail Title',
                            type: 'string',
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: 'detailDescription',
                            title: 'Detail Description',
                            type: 'text',
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: 'icon',
                            title: 'Icon Image',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                            validation: Rule => Rule.required(),
                        }),
                    ],
                },
            ],
            // validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'assets',
            title: 'Assets',
            type: 'object',
            fields: [
                defineField({
                    name: 'assetsTitle',
                    title: 'Asset Title',
                    type: 'string',
                    validation: Rule => Rule.required()
                }),
                defineField({
                    name: 'assetsDescription',
                    title: 'Asset Description',
                    type: 'text',
                    validation: Rule => Rule.required()
                }),
                defineField({
                    name: 'assetsDocuments',
                    title: 'Asset Documents',
                    type: 'array',
                    of: [
                        { type: 'file' }
                    ],
                }),
            ],
        }),
        defineField({
            name: 'tooltipDescription',
            title: 'Tooltip Description',
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
        orderRankField({ type: "service" }),
    ],
    preview: {
        select: {
            title: 'serviceTitle',
            images: 'serviceImages',
        },
        prepare(selection) {
            const { images, title } = selection

            return {
                media: images[0],
                title,
            }
        },
    },
})


export default service