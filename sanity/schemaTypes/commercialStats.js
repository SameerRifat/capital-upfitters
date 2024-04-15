import { defineField, defineType } from 'sanity'

const commercialStats = defineType({
    name: 'commercialStats',
    title: 'Commercial Stats',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        defineField({
            name: 'customers',
            title: 'No. of Customers',
            type: 'number',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'services',
            title: 'No. of services',
            type: 'number',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'years',
            title: 'Years of Experience',
            type: 'number',
            validation: Rule => Rule.required()
        }),
    ],
    preview: {
        prepare: () => ({
            title: 'Stats',
        }),
    },
    initialValue: {
        customers: 0,
        services: 0,
        years: 0,
    },
})


export default commercialStats