import { defineField, defineType } from 'sanity'

const termsAndConditions = defineType({
    name: 'termsAndConditions',
    title: 'Terms And Conditions',
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
            name: 'details',
            title: 'Privacy Policy Details',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare(selection) {
            return { title: selection.title};
        },
    },
})


export default termsAndConditions