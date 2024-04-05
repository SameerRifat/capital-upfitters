import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';
import { defineField, defineType } from 'sanity'

const accessories = defineType({
    name: 'accessories',
    title: 'Accessories',
    type: 'document',
    orderings: [orderRankOrdering],
    fields: [
        defineField({
            name: 'accessoryName',
            title: 'Accessory Name',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'accessoryImage',
            title: 'Accessory image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'details',
            title: 'Accessory Details',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]
        }),
        orderRankField({ type: "accessories" }),
    ],
    preview: {
        select: {
            title: 'accessoryName',
            image: 'accessoryImage',
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


export default accessories