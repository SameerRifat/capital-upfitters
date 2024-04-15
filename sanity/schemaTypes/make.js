import { defineField, defineType } from 'sanity'

const make = defineType({
    name: 'make',
    title: 'Make (Quote Request)',
    type: 'document',
    fields: [
        defineField({
            name: 'make',
            title: 'Make',
            type: 'string',
            validation: Rule => Rule.required()
        }),
    ],
    preview: {
        select: {
            title: 'make',
        },
        prepare(selection) {
            return {
                title: selection.title
            }
        },
    },
})

export default make
