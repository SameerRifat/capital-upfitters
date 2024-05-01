import { defineField, defineType } from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

const accessoriesCatalogs = defineType({
    name: 'accessoriesCatalogs',
    title: 'Automotive Catalogs',
    type: 'document',
    orderings: [orderRankOrdering],
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
        orderRankField({ type: "accessoriesCatalogs" }),
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