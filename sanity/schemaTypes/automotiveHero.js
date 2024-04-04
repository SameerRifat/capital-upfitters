import { defineField, defineType } from 'sanity'

const automotiveHero = defineType({
    name: 'automotiveHero',
    title: 'Automotive',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        defineField({
            name: 'titleLines',
            title: 'Title Lines',
            type: 'array',
            of: [{ type: 'string' }],
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required()
        }),
    ],
    preview: {
        prepare: () => ({
            title: 'Automotive',
        }),
    },
})


export default automotiveHero