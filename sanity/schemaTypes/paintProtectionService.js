import { defineField, defineType } from 'sanity'

const paintProtectoionService = defineType({
    name: 'paintProtectionService',
    title: 'PPF Packages',
    type: 'document',
    fields: [
        defineField({
            name: 'package',
            title: 'Package',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'service',
            title: 'Service',
            type: 'reference',
            to: { type: 'service' },
        }),
        defineField({
            name: 'packageImage',
            title: 'Package image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'benefits',
            title: 'Package Benefits',
            type: 'array',
            of: [{ type: 'string' }],
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'benefitsDescription',
            title: 'Benefits Description',
            type: 'text',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'packageDescription',
            title: 'Package Description',
            type: 'text',
            validation: Rule => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'package',
            image: 'packageImage'
        },
        prepare(selection) {
            const { title, image } = selection
            return { ...selection, title, media: image };
        },
    },
})


export default paintProtectoionService