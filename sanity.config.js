import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'sham-automobile',
  title: 'Sham Automobile CMS',
  
  projectId: '7cogdhza',
  dataset: 'production',
  
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Inhalt')
          .items([
            S.listItem()
              .title('Fahrzeuge')
              .child(
                S.documentTypeList('vehicle')
                  .title('Fahrzeuge')
                  .filter('_type == "vehicle"')
              ),
            ...S.documentTypeListItems().filter(
              (listItem) => !['vehicle'].includes(listItem.getId())
            ),
          ]),
    }),
    visionTool(),
  ],
  
  schema: {
    types: schemaTypes,
  },
})
