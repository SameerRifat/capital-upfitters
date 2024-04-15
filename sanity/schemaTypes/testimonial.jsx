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
        defineField({
            name: 'isCommercial',
            title: 'For Commercial',
            type: 'boolean',
            description: 'Toggle to add the current testimonial to commercial',
            initialValue: () => false,
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'about',
            media: 'avatar',
            isCommercial: 'isCommercial'
        },
        prepare(selection) {
            const { title, subtitle, isCommercial } = selection
            const customizedTitle = `${title} ${isCommercial ? '(commercial)' : '(automotive)'}`
            return {
                title: customizedTitle,
                subtitle: subtitle,
                media: () => <Icon icon="fluent:person-feedback-20-regular" />
            };
        },
    },
})

export default testimonial
