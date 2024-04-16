import { defineField, defineType } from 'sanity'

const emailHeading = defineType({
    name: 'emailHeading',
    title: 'Email Heading',
    type: 'document',
    // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            validation: Rule => Rule.required()
        }),
    ],
    preview: {
        prepare: () => ({
            title: 'Email Heading',
        }),
    },
})


export default emailHeading