import { defineField, defineType } from 'sanity'

const specification = defineType({
    name: 'specification',
    title: 'Service Sepcification',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Service Title',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'service',
            title: 'Service',
            description: 'Select a serive',
            type: 'reference',
            to: { type: 'service' },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'detail',
            title: 'Specification Detail',
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
            title: 'title',
            image: 'image'
        },
        prepare(selection) {
            const { title, image } = selection
            return { ...selection, title, media: image };
        },
    },
})


export default specification