import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'pricingPage',
    title: 'Pricing Page',
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
            name: 'tiers',
            title: 'Pricing Tiers',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', title: 'Tier Name', type: 'string' },
                        { name: 'description', title: 'Description', type: 'string' },
                        { name: 'price', title: 'Price (per month)', type: 'string' },
                        { name: 'isPopular', title: 'Is Most Popular?', type: 'boolean' },
                        {
                            name: 'features',
                            title: 'Features',
                            type: 'array',
                            of: [{ type: 'string' }]
                        },
                        { name: 'ctaText', title: 'CTA Button Text', type: 'string' }
                    ]
                }
            ]
        }),
        defineField({
            name: 'faqs',
            title: 'FAQs',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'faq' }] }]
        })
    ],
})
