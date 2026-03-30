import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project / Case Study',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Project Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'clientName',
            title: 'Client Name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
        }),
        defineField({
            name: 'isFeaturedOnHomepage',
            title: 'Feature on Homepage?',
            type: 'boolean',
            description: 'Enable to display this case study on the homepage Proven Growth section',
            initialValue: false,
        }),
        defineField({
            name: 'cardLabel',
            title: 'Homepage Card Label (e.g. Fine Dining, Social Growth)',
            type: 'string',
        }),
        defineField({
            name: 'badgeColor',
            title: 'Card Glow/Badge Color',
            type: 'string',
            options: {
                list: [
                    { title: 'Green (#39FF14)', value: '#39FF14' },
                    { title: 'Cyan (#00F0FF)', value: '#00F0FF' },
                    { title: 'Purple (#7000FF)', value: '#7000FF' },
                    { title: 'Blue (#00FFFF)', value: '#00FFFF' }
                ]
            }
        }),
        defineField({ name: 'metric1Value', title: 'Metric 1 Value (e.g. +45%)', type: 'string' }),
        defineField({ name: 'metric1Label', title: 'Metric 1 Label (e.g. Reservation Volume)', type: 'string' }),
        defineField({ name: 'metric2Value', title: 'Metric 2 Value (e.g. 3.2x)', type: 'string' }),
        defineField({ name: 'metric2Label', title: 'Metric 2 Label (e.g. Ad ROAS)', type: 'string' }),
        defineField({ name: 'clientLocation', title: 'Client Location (e.g. London, UK)', type: 'string' }),
        defineField({ name: 'clientIndustry', title: 'Client Industry (e.g. Fine Dining)', type: 'string' }),
        defineField({
            name: 'serviceCategories',
            title: 'Service Categories',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Website Design & Development', value: 'website-design' },
                    { title: 'Meta / Facebook Ads', value: 'facebook-ads' },
                    { title: 'Social Media Management', value: 'social-media' },
                    { title: 'Local SEO', value: 'local-seo' },
                    { title: 'Content Creation', value: 'content-creation' },
                    { title: 'Brand Identity', value: 'brand-identity' },
                ],
            },
        }),
        defineField({
            name: 'metricBadge',
            title: 'Metric Badge',
            type: 'string',
            description: 'E.g., "+45% Volume"',
        }),
        defineField({
            name: 'hook',
            title: 'Hook',
            type: 'text',
        }),
        defineField({
            name: 'dashboardImage',
            title: 'Dashboard Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Required for SEO and screen readers.',
                }
            ],
        }),
        defineField({
            name: 'heroMediaType',
            title: 'Hero Media Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Image', value: 'image' },
                    { title: 'Video', value: 'video' }
                ],
                layout: 'radio'
            },
            initialValue: 'image'
        }),
        defineField({
            name: 'heroVideo',
            title: 'Hero Video File (MP4)',
            type: 'file',
            options: { accept: 'video/*' },
            hidden: ({ document }) => document?.heroMediaType !== 'video'
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image (Case Study Cover)',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Required for SEO and screen readers.',
                }
            ],
            hidden: ({ document }) => document?.heroMediaType === 'video'
        }),
        defineField({
            name: 'projectDetails',
            title: 'Project Details Text',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image1',
            title: 'First Image (Full Width Panorama)',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Required for SEO and screen readers.',
                }
            ],
        }),
        defineField({
            name: 'problemText',
            title: 'Problem Description Text',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'problemCards',
            title: 'Problem Cards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Title', type: 'string' },
                        { name: 'description', title: 'Description', type: 'text' }
                    ]
                }
            ],
            validation: (Rule) => Rule.max(6)
        }),
        defineField({
            name: 'image2',
            title: 'Second Image (Standard Contained)',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Required for SEO and screen readers.',
                }
            ],
        }),
        defineField({
            name: 'solutionText',
            title: 'Solution Description Text',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'solutionCards',
            title: 'Solution Cards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Title', type: 'string' },
                        { name: 'description', title: 'Description', type: 'text' }
                    ]
                }
            ],
            validation: (Rule) => Rule.max(6)
        }),
        defineField({
            name: 'image3',
            title: 'Third Image (Tall format)',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Required for SEO and screen readers.',
                }
            ],
        }),
        defineField({
            name: 'processText',
            title: 'Work Process Description Text',
            type: 'text',
        }),
        defineField({
            name: 'processCards',
            title: 'Process Steps / Cards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Step Title', type: 'string' },
                        { name: 'description', title: 'Step Description', type: 'text' }
                    ]
                }
            ],
            validation: (Rule) => Rule.max(6)
        }),
        defineField({
            name: 'workflowText',
            title: 'Workflow Scenario Description Text',
            type: 'text',
        }),
        defineField({
            name: 'workflowCards',
            title: 'Workflow Scenario Cards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Title', type: 'string' },
                        { name: 'description', title: 'Description', type: 'text' }
                    ]
                }
            ],
            validation: (Rule) => Rule.max(6)
        }),
        defineField({
            name: 'image4',
            title: 'Fourth Image (Full-width, in-between Workflow & Results)',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Required for SEO and screen readers.',
                }
            ],
        }),
        defineField({
            name: 'resultsText',
            title: 'Results / Other Options Description Text',
            type: 'text',
        }),
        defineField({
            name: 'resultsList',
            title: 'Results / Other Listed Items',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Item Title', type: 'string' },
                        { name: 'description', title: 'Item Description', type: 'text' }
                    ]
                }
            ],
        }),
        defineField({
            name: 'customSections',
            title: 'Custom Content Sections',
            description: 'Add any number of custom flexible text and card sections to this project.',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'sectionTitle', title: 'Section Title', type: 'string' },
                        { name: 'sectionText', title: 'Section Text', type: 'text' },
                        {
                            name: 'sectionCards',
                            title: 'Section Cards',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        { name: 'title', title: 'Card Title', type: 'string' },
                                        { name: 'description', title: 'Card Description', type: 'text' }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }),
    ],
})
