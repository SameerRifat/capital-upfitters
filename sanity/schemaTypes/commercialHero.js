import { defineField, defineType } from 'sanity'

const commercialHero = defineType({
    name: 'commercialHero',
    title: 'Commercial',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
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
            title: 'Commercial',
        }),
    },
})


export default commercialHero