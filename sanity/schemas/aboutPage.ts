import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'aboutPage',
    title: 'About Page',
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
            name: 'galleryImages',
            title: 'Gallery Images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }]
        }),
        defineField({
            name: 'teamMembers',
            title: 'Team Members',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', title: 'Name', type: 'string' },
                        { name: 'role', title: 'Role', type: 'string' },
                        { name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } },
                        { name: 'color', title: 'Theme Color (Hex)', type: 'string', description: 'e.g. #00F0FF, #7000FF, #4ADE80' }
                    ]
                }
            ]
        })
    ],
})
