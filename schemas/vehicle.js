export default {
  name: 'vehicle',
  title: 'Fahrzeug',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: Rule => Rule.required().max(100)
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'make',
      title: 'Marke',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'model',
      title: 'Modell',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'year',
      title: 'Baujahr',
      type: 'number',
      validation: Rule => Rule.required().min(1990).max(new Date().getFullYear() + 1)
    },
    {
      name: 'price',
      title: 'Preis (€)',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    },
    {
      name: 'mileage',
      title: 'Kilometerstand',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    },
    {
      name: 'transmission',
      title: 'Getriebe',
      type: 'string',
      options: {
        list: [
          { title: 'Schaltgetriebe', value: 'manual' },
          { title: 'Automatik', value: 'automatic' },
          { title: 'Halbautomatik', value: 'semi-automatic' }
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
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
          { title: 'CNG', value: 'cng' }
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'powerKw',
      title: 'Leistung (kW)',
      type: 'number',
      validation: Rule => Rule.min(0)
    },
    {
      name: 'color',
      title: 'Farbe',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Beschreibung',
      type: 'text',
      rows: 4
    },
    {
      name: 'mainImage',
      title: 'Hauptbild',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Wichtig für SEO und Barrierefreiheit'
        }
      ]
    },
    {
      name: 'images',
      title: 'Weitere Bilder',
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
              title: 'Alt Text',
              type: 'string'
            }
          ]
        }
      ],
      options: {
        layout: 'grid'
      }
    },
    {
      name: 'featured',
      title: 'Empfohlen',
      type: 'boolean',
      description: 'Zeigt das Fahrzeug als empfohlenes Fahrzeug an'
    },
    {
      name: 'publishedAt',
      title: 'Veröffentlicht am',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    
    // === NEUE FELDER ===
    
    // Basis Daten
    {
      name: 'bodyType',
      title: 'Fahrzeugtyp',
      type: 'string',
      options: {
        list: [
          { title: 'Limousine', value: 'limousine' },
          { title: 'Kombi', value: 'kombi' },
          { title: 'SUV', value: 'suv' },
          { title: 'Coupé', value: 'coupe' },
          { title: 'Cabrio', value: 'cabrio' },
          { title: 'Kleinwagen', value: 'kleinwagen' },
          { title: 'Van', value: 'van' },
          { title: 'Pickup', value: 'pickup' }
        ]
      }
    },
    {
      name: 'doors',
      title: 'Anzahl Türen',
      type: 'number',
      validation: Rule => Rule.min(2).max(6)
    },
    
    // Fahrzeughistorie
    {
      name: 'firstRegistration',
      title: 'Erstzulassung',
      type: 'date'
    },
    {
      name: 'inspection',
      title: 'TÜV/Hauptuntersuchung',
      type: 'date'
    },
    {
      name: 'owners',
      title: 'Anzahl Vorbesitzer',
      type: 'number',
      validation: Rule => Rule.min(0)
    },
    {
      name: 'serviceBook',
      title: 'Serviceheft vorhanden',
      type: 'boolean'
    },
    
    // Technische Daten
    {
      name: 'gears',
      title: 'Anzahl Gänge',
      type: 'number',
      validation: Rule => Rule.min(1).max(10)
    },
    {
      name: 'cylinders',
      title: 'Anzahl Zylinder',
      type: 'number',
      validation: Rule => Rule.min(1).max(12)
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'make',
      media: 'mainImage'
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title,
        subtitle: subtitle
      }
    }
  },
  orderings: [
    {
      title: 'Veröffentlicht (neueste zuerst)',
      name: 'publishedAtDesc',
      by: [
        { field: 'publishedAt', direction: 'desc' }
      ]
    },
    {
      title: 'Preis (niedrigster zuerst)',
      name: 'priceAsc',
      by: [
        { field: 'price', direction: 'asc' }
      ]
    }
  ]
}