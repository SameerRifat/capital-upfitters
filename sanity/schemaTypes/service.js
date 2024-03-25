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
        defineField({
            name: 'smallDescription',
            title: 'Small Description',
            type: 'text',
            validation: Rule => Rule.required(),
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