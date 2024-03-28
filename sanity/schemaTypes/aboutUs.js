import { defineField, defineType } from 'sanity'

const aboutUs = defineType({
    name: 'aboutUs',
    title: 'About Us',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        defineField({
            name: 'description1',
            title: 'About Us description 1',
            type: 'text',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'description2',
            title: 'About Us description 2',
            type: 'text',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
        }),
    ],
    preview: {
        prepare: () => ({
            title: 'About Us',
        }),
    },
})


export default aboutUs