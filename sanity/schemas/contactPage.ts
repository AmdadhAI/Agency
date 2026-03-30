import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Contact Us',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      initialValue: 'Have A Question Or Just Want To Chat?',
    }),
    defineField({
      name: 'heroSubtext',
      title: 'Hero Subtext',
      type: 'text',
      rows: 2,
      initialValue: 'High-fidelity growth agency for hospitality leaders seeking global scale.',
    }),
    defineField({
        name: 'videoHeadline',
        title: 'Video Section Headline',
        type: 'string',
        initialValue: 'Tell Us About Your Amazing Project Here',
    }),
    defineField({
        name: 'videoType',
        title: 'Video Source Type',
        type: 'string',
        options: {
            list: [
                { title: 'Upload File', value: 'file' },
                { title: 'External URL (Direct Link)', value: 'url' },
            ],
            layout: 'radio',
        },
        initialValue: 'url',
    }),
    defineField({
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      hidden: ({ parent }) => parent?.videoType !== 'file',
    }),
    defineField({
      name: 'videoUrl',
      title: 'External Video URL',
      type: 'url',
      description: 'Enter a direct .mp4 link or video URL.',
      initialValue: 'https://www.w3schools.com/html/mov_bbb.mp4',
      hidden: ({ parent }) => parent?.videoType !== 'url',
    }),
  ],
})
