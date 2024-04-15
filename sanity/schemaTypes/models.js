import { defineField, defineType } from 'sanity'

const models = defineType({
    name: 'models',
    title: 'Vehicle Models (Quote Request)',
    type: 'document',
    fields: [
        defineField({
            name: 'make',
            title: 'Make',
            type: 'reference',
            to: { type: 'make' },
            description: 'Select a Make'
        }),
        defineField({
            name: 'model',
            title: 'Modal',
            type: 'string',
            validation: Rule => Rule.required()
        }),
    ],
    preview: {
        select: {
            title: 'model',
            make: 'make.make'
        },
        prepare(selection) {
            const customizedTitle = `${selection.title} (${selection.make})`
            return {
                title: customizedTitle
            }
        },
    },
})

export default models
