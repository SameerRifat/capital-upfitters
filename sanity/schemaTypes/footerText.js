import { defineField, defineType } from 'sanity'

const footerText = defineType({
    name: 'footerText',
    title: 'Footer Text',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        defineField({
            name: 'text',
            title: 'Footer Text',
            type: 'text',
            validation: Rule => Rule.required()
        }),
    ],
    preview: {
        prepare: () => ({
            title: 'Footer',
        }),
    },
})


export default footerText