import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'servicesPage',
    title: 'Services Page',
    type: 'document',
    fields: [
        defineField({
            name: 'heroHeadline',
            title: 'Hero Headline',
            type: 'string',
        }),
        defineField({
            name: 'heroSubtext',
            title: 'Hero Subtext',
            type: 'text',
        }),
        defineField({
            name: 'testimonials',
            title: 'Testimonials',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', title: 'Name', type: 'string' },
                        { name: 'role', title: 'Role', type: 'string' },
                        { name: 'quote', title: 'Quote', type: 'text' },
                        { name: 'metric', title: 'Metric', type: 'string' },
                        { name: 'color', title: 'Theme Color (Hex)', type: 'string' }
                    ]
                }
            ]
        })
    ],
})
