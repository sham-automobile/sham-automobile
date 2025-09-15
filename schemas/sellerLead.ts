import { defineType, defineField } from 'sanity'

export const sellerLead = defineType({
  name: 'sellerLead',
  title: 'Verkäufer-Anfrage',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'E-Mail',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Telefon',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'make',
      title: 'Marke',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'model',
      title: 'Modell',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Baujahr',
      type: 'number',
      validation: (Rule) => Rule.required().min(1990).max(new Date().getFullYear() + 1),
    }),
    defineField({
      name: 'mileage',
      title: 'Kilometerstand',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'description',
      title: 'Beschreibung',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'images',
      title: 'Bilder',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Neu', value: 'new' },
          { title: 'Kontaktiert', value: 'contacted' },
          { title: 'Bewertet', value: 'evaluated' },
          { title: 'Abgeschlossen', value: 'completed' },
          { title: 'Abgelehnt', value: 'rejected' },
        ],
      },
      initialValue: 'new',
    }),
    defineField({
      name: 'notes',
      title: 'Interne Notizen',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'submittedAt',
      title: 'Eingegangen am',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'make',
      media: 'images.0',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection
      return {
        title: title,
        subtitle: `${subtitle} - ${new Date().getFullYear()}`,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: 'Neueste zuerst',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
  ],
})
