import { Icon } from '@iconify/react';
import { defineField, defineType } from 'sanity'

const testimonial = defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'about',
            title: 'About',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'avatar',
            title: 'Avatar',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'comment',
            title: 'Comment',
            type: 'text',
            validation: Rule => Rule.required()
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'about',
            media: 'avatar'
        },
        prepare(selection) {
            return {
                title: selection.title,
                subtitle: selection.subtitle,
                media: () => <Icon icon="fluent:person-feedback-20-regular" />
            };
        },
    },
})

export default testimonial
