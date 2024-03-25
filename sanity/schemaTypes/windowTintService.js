import { defineField, defineType } from 'sanity'

const windowTintService = defineType({
    name: 'windowTintService',
    title: 'Window Tint Service',
    type: 'document',
    fields: [
        defineField({
            name: 'service',
            title: 'Service',
            type: 'reference',
            to: { type: 'service' },
            description: "Select a service"
        }),
        defineField({
            name: 'vehicleType',
            title: 'Vehicle Type',
            type: 'reference',
            to: [{ type: 'vehicleType' }],
        }),
        defineField({
            name: 'tintType',
            title: 'Tint Type',
            type: 'string',
            options: {
                list: [
                    'carbon',
                    'ceramic',
                    'ceramic+'
                ],
            },
        }),
        defineField({
            name: 'vehicleImage',
            title: 'Vehicle image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'charges',
            title: 'Charges',
            type: 'number',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'benefits',
            title: 'Package Benefits',
            type: 'array',
            of: [{ type: 'string' }],
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'benefitsDescription',
            title: 'Benefits Description',
            type: 'text',
            validation: Rule => Rule.required(),
        }),
    ],
    preview: {
        select: {
            vehicleType: 'vehicleType.vehicleName',
            tintType: 'tintType',
            image: 'vehicleImage'
        },
        prepare(selection) {
            const { vehicleType, tintType, image } = selection
            const title = `${vehicleType ? vehicleType : ''} ${tintType ? '-' : ''} ${tintType ? tintType : ''}`;
            return { ...selection, title, media: image };
        },
    },
})


export default windowTintService