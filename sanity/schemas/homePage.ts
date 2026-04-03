import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
        defineField({
            name: 'heroHeadline',
            title: 'Hero Headline',
            type: 'string',
        }),
        defineField({
            name: 'heroSecondaryHeadline',
            title: 'Hero Secondary Headline (e.g. "We Build *Revenue* Engines.")',
            type: 'string',
            description: 'Wrap a word in *asterisks* to apply the cyan/purple gradient highlight.',
        }),
        defineField({
            name: 'heroSubtext',
            title: 'Hero Subtext',
            type: 'text',
        }),
        defineField({
            name: 'primaryCtaText',
            title: 'Primary CTA Text',
            type: 'string',
        }),
        defineField({
            name: 'trustedLogos',
            title: 'Trusted By Logos',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }]
        }),
        defineField({
            name: 'features',
            title: 'How We Engineer Revenue (Features)',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Title', type: 'string' },
                        { name: 'description', title: 'Description', type: 'text' },
                        { name: 'iconName', title: 'Icon (Material Symbol Name)', type: 'string', description: 'e.g. "speed", "trending_up"' },
                    ]
                }
            ]
        }),
        defineField({
            name: 'usps',
            title: 'Why Choose Us (USPs)',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Title', type: 'string' },
                        { name: 'description', title: 'Description', type: 'text' },
                    ]
                }
            ]
        })
    ],
})
