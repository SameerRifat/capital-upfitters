import { Icon } from '@iconify/react';
import { defineField, defineType } from 'sanity'

const vehicleType = defineType({
    name: 'vehicleType',
    title: 'Window Tint Vehicle Type',
    type: 'document',
    fields: [
        defineField({
            name: 'vehicleName',
            title: 'Vehicle Name',
            type: 'string',
            validation: Rule => Rule.required()
        }),
    ],
    preview: {
        select: {
            title: 'vehicleName',
        },
        prepare(selection) {
            return {
                title: selection.title,
                media: () => <Icon icon="map:car-repair" /> 
            };
        },
    },
})


export default vehicleType