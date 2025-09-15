import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Website-Einstellungen',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Website-Titel',
      type: 'string',
      initialValue: 'Sham Automobile',
    }),
    defineField({
      name: 'description',
      title: 'Website-Beschreibung',
      type: 'text',
      rows: 3,
      initialValue: 'Ihr zuverlässiger Gebrauchtwagenhändler in Langenhagen. Qualität, Vertrauen und faire Preise.',
    }),
    defineField({
      name: 'contactEmail',
      title: 'E-Mail',
      type: 'string',
      initialValue: 'info@sham-automobile.de',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Telefon',
      type: 'string',
      initialValue: '+49 172 5413020',
    }),
    defineField({
      name: 'contactAddress',
      title: 'Adresse',
      type: 'text',
      rows: 2,
      initialValue: 'Walsroder Straße 237\n30855 Langenhagen',
    }),
    defineField({
      name: 'openingHours',
      title: 'Öffnungszeiten',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'day',
              title: 'Tag',
              type: 'string',
              options: {
                list: [
                  { title: 'Montag', value: 'monday' },
                  { title: 'Dienstag', value: 'tuesday' },
                  { title: 'Mittwoch', value: 'wednesday' },
                  { title: 'Donnerstag', value: 'thursday' },
                  { title: 'Freitag', value: 'friday' },
                  { title: 'Samstag', value: 'saturday' },
                  { title: 'Sonntag', value: 'sunday' },
                ],
              },
            },
            {
              name: 'hours',
              title: 'Zeiten',
              type: 'string',
              placeholder: 'z.B. 09:00 - 18:00 oder Geschlossen',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        },
        {
          name: 'google',
          title: 'Google Business',
          type: 'url',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
