import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'datetime',
      title: 'Date and Time',
      type: 'datetime',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
