import { defineField, defineType } from 'sanity'

const companyLogo = defineType({
    name: 'companyLogo',
    title: 'Automotive Customers',
    type: 'document',
    fields: [
        defineField({
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Company Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'companyName',
            image: 'image'
        },
        prepare(selection) {
            const { image, title } = selection

            return {
                media: image,
                title,
            }
        },
    },
})


export default companyLogo