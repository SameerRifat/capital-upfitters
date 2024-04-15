import { defineField, defineType } from 'sanity'

const accessoriesCatalogs = defineType({
    name: 'accessoriesCatalogs',
    title: 'Accessories Catalogs',
    type: 'document',
    fields: [
        defineField({
            name: 'Title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Catalog Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'link',
            title: 'Catalog Link',
            type: 'string',
            validation: Rule => Rule.required()
        }),
    ],
    preview: {
        select: {
            title: 'Title',
            image: 'image',
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


export default accessoriesCatalogs