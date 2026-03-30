import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'globalSettings',
    title: 'Global Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
        }),
        defineField({
            name: 'contactEmail',
            title: 'Contact Email',
            type: 'string',
        }),
        defineField({
            name: 'whatsappNumber',
            title: 'WhatsApp Number',
            type: 'string',
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'platform', title: 'Platform Name', type: 'string' },
                        { name: 'url', title: 'URL', type: 'url' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'mainNav',
            title: 'Main Navigation Links',
            description: 'Links in the top header. e.g. "Services" -> "/services"',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', title: 'Label', type: 'string' },
                        { name: 'href', title: 'URL or Path', type: 'string', description: 'Can be an absolute URL or a relative path.' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'footerNav',
            title: 'Secondary Footer Links',
            description: 'Links at the bottom like "Terms & Conditions" or "Privacy Policy"',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', title: 'Label', type: 'string' },
                        { name: 'href', title: 'URL or Path', type: 'string', description: 'Can be an absolute URL or a relative path.' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'copyrightText',
            title: 'Copyright Text',
            type: 'string',
            description: 'e.g. "© 2026 RestauReach. All rights reserved."'
        })
    ],
})
