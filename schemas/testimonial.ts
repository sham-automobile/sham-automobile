import { defineType, defineField } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Kundenstimme',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: 'rating',
      title: 'Bewertung',
      type: 'number',
      options: {
        list: [
          { title: '5 Sterne', value: 5 },
          { title: '4 Sterne', value: 4 },
          { title: '3 Sterne', value: 3 },
          { title: '2 Sterne', value: 2 },
          { title: '1 Stern', value: 1 },
        ],
      },
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: 'vehicle',
      title: 'Gekauftes Fahrzeug',
      type: 'string',
      description: 'z.B. "BMW 3er, 2020"',
    }),
    defineField({
      name: 'featured',
      title: 'Auf Startseite anzeigen',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'text',
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title,
        subtitle: subtitle?.substring(0, 50) + '...',
      }
    },
  },
})
