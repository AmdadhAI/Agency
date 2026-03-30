import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'faqPage',
    title: 'FAQ Page',
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
            name: 'faqGroups',
            title: 'FAQ Categories',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'category', title: 'Category Name', type: 'string' },
                        {
                            name: 'faqs',
                            title: 'Questions & Answers',
                            type: 'array',
                            of: [{ type: 'reference', to: [{ type: 'faq' }] }]
                        }
                    ]
                }
            ]
        })
    ],
})
