import { defineType, defineField } from 'sanity'

export const vehicle = defineType({
  name: 'vehicle',
  title: 'Fahrzeug',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
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
      name: 'price',
      title: 'Preis (€)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'mileage',
      title: 'Kilometerstand',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'transmission',
      title: 'Getriebe',
      type: 'string',
      options: {
        list: [
          { title: 'Schaltgetriebe', value: 'manual' },
          { title: 'Automatik', value: 'automatic' },
          { title: 'Halbautomatik', value: 'semi-automatic' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fuelType',
      title: 'Kraftstoff',
      type: 'string',
      options: {
        list: [
          { title: 'Benzin', value: 'petrol' },
          { title: 'Diesel', value: 'diesel' },
          { title: 'Elektro', value: 'electric' },
          { title: 'Hybrid', value: 'hybrid' },
          { title: 'LPG', value: 'lpg' },
          { title: 'CNG', value: 'cng' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'power',
      title: 'Leistung (PS)',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'color',
      title: 'Farbe',
      type: 'string',
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
          fields: [
            {
              name: 'alt',
              title: 'Alt-Text',
              type: 'string',
              description: 'Wichtig für SEO und Barrierefreiheit',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'featured',
      title: 'Empfohlen',
      type: 'boolean',
      description: 'Auf der Startseite anzeigen',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Veröffentlicht am',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
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
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Preis aufsteigend',
      name: 'priceAsc',
      by: [{ field: 'price', direction: 'asc' }],
    },
    {
      title: 'Preis absteigend',
      name: 'priceDesc',
      by: [{ field: 'price', direction: 'desc' }],
    },
  ],
})
