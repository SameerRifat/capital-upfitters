import { defineField, defineType } from 'sanity'

const homePage = defineType({
    name: 'homePage',
    title: 'Home',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'cards',
            title: 'Cards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'cardTitle',
                            title: 'Card Title',
                            type: 'string',
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: 'cardDescription',
                            title: 'Card Description',
                            type: 'text',
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: 'cardImage',
                            title: 'Card Image',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                            validation: Rule => Rule.required(),
                        }),
                        defineField({
                            name: 'route',
                            title: 'Route',
                            type: 'string',
                            validation: Rule => Rule.required()
                        }),
                    ],
                },
            ],
            validation: Rule => Rule.required(),
        }),
    ],
    preview: {
        prepare: () => ({
            title: 'Home',
        }),
    },
})

export default homePage
