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
        // Marquee
        defineField({
            name: 'marqueeTitle',
            title: 'Marquee Title',
            type: 'string',
            description: 'Default: "Trusted by data-driven brands"'
        }),
        // Proven Growth
        defineField({
            name: 'provenGrowthPill',
            title: 'Proven Growth Pill / Tag',
            type: 'string',
            description: 'Default: "Client Success"'
        }),
        defineField({
            name: 'provenGrowthTitle',
            title: 'Proven Growth Title',
            type: 'string',
            description: 'Default: "Proven Growth in Hospitality"'
        }),
        // Growth Blueprint
        defineField({
            name: 'blueprintTitle',
            title: 'Growth Blueprint Title',
            type: 'string',
            description: 'Default: "How We Engineer Revenue"'
        }),
        defineField({
            name: 'blueprintSubtext',
            title: 'Growth Blueprint Subtext',
            type: 'text',
            description: 'Default: "Our proven methodology for scaling hospitality brands."'
        }),
        // Showreel
        defineField({
            name: 'showreelTitle',
            title: 'Showreel Title',
            type: 'string',
            description: 'Wrap word in asterisks for new line + italics (e.g., "Success*Stories*")'
        }),
        defineField({
            name: 'showreelSubtext',
            title: 'Showreel Subtext',
            type: 'text',
        }),
        // What We Do
        defineField({
            name: 'whatWeDoTitle',
            title: 'What We Do Title',
            type: 'string',
            description: 'Default: "What We Do"'
        }),
        defineField({
            name: 'whatWeDoSubtext',
            title: 'What We Do Subtext',
            type: 'text',
        }),
        // Why Choose Us
        defineField({
            name: 'whyChooseUsTitle',
            title: 'Why Choose Us Title',
            type: 'string',
            description: 'Default: "Why Choose Us"'
        }),
        defineField({
            name: 'whyChooseUsSubtext',
            title: 'Why Choose Us Subtext',
            type: 'text',
        }),
        // Pricing Headers
        defineField({
            name: 'pricingTitle',
            title: 'Pricing Section Title',
            type: 'string',
            description: 'Default: "Choose Your Revenue Engine."'
        }),
        defineField({
            name: 'pricingSubtext',
            title: 'Pricing Section Subtext',
            type: 'text',
        }),
        // Bottom CTA
        defineField({
            name: 'bottomCtaTitle',
            title: 'Bottom CTA Title',
            type: 'string',
            description: 'Wrap word in asterisks for cyan italics (e.g. "Ready to scale *beyond limits?*")'
        }),
        defineField({
            name: 'bottomCtaSubtext',
            title: 'Bottom CTA Subtext',
            type: 'text',
        }),
        // PROVEN GROWTH CARDS
        defineField({
            name: 'provenGrowthCards',
            title: 'Proven Growth Cards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Title', type: 'string' },
                        { name: 'description', title: 'Description', type: 'text' },
                        { name: 'cardLabel', title: 'Card Label', type: 'string' },
                        { name: 'badgeColor', title: 'Badge Color (Hex)', type: 'string', description: 'e.g., #39FF14' },
                        { name: 'clientName', title: 'Client Name', type: 'string' },
                        { name: 'clientLocation', title: 'Client Location', type: 'string' },
                        { name: 'clientIndustry', title: 'Client Industry', type: 'string' },
                        { name: 'metric1Value', title: 'Metric 1 Value', type: 'string', description: 'e.g., +45%' },
                        { name: 'metric1Label', title: 'Metric 1 Label', type: 'string', description: 'e.g., Reservation Volume' },
                        { name: 'metric2Value', title: 'Metric 2 Value', type: 'string' },
                        { name: 'metric2Label', title: 'Metric 2 Label', type: 'string' },
                    ]
                }
            ]
        }),
        // GROWTH BLUEPRINT STEPS
        defineField({
            name: 'blueprintSteps',
            title: 'Growth Blueprint Steps',
            description: 'Exactly 5 steps are required for the layout.',
            type: 'array',
            validation: Rule => Rule.length(5),
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Step Title', type: 'string' },
                        { name: 'description', title: 'Short Description', type: 'text' },
                    ]
                }
            ]
        }),
        // WHAT WE DO BLOCKS
        defineField({
            name: 'whatWeDoBlocks',
            title: 'What We Do Service Blocks',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Service Title', type: 'string' },
                        { name: 'description', title: 'Service Description', type: 'text' },
                        { name: 'image1', title: 'Image 1', type: 'image', options: { hotspot: true } },
                        { name: 'image2', title: 'Image 2', type: 'image', options: { hotspot: true } },
                        { name: 'slug', title: 'Link to Service', type: 'string', description: 'e.g., "omni-search"' }
                    ]
                }
            ]
        }),
        // WHY CHOOSE US CARDS
        defineField({
            name: 'whyChooseUsCards',
            title: 'Why Choose Us Cards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Card Title', type: 'string' },
                        { name: 'description', title: 'Card Description', type: 'text' },
                    ]
                }
            ]
        }),
        // COMPETITOR COMPARISON ROWS
        defineField({
            name: 'competitorRows',
            title: 'Competitor Comparison Rows',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'providerName', title: 'Provider Name', type: 'string' },
                        { name: 'description', title: 'Short Description', type: 'string' },
                        { name: 'isHospitalityFocused', title: 'Hospitality Focus', type: 'boolean' },
                        { name: 'hasAiAutomation', title: 'AI Automation', type: 'boolean' },
                        { name: 'executionSpeed', title: 'Execution Speed Text', type: 'string', description: 'e.g., "Fast (2 Weeks)" or "Slow (Months)"' },
                        { name: 'isCostEfficient', title: 'Cost Efficiency', type: 'boolean' },
                        { name: 'scalesRevenue', title: 'Revenue Scaling', type: 'boolean' }
                    ]
                }
            ]
        })
    ],
})
