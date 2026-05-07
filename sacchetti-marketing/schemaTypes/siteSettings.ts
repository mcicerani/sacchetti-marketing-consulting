import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Impostazioni Sito',
  type: 'document',
  fields: [
    defineField({
      name: 'stats',
      title: 'Statistiche (strip rossa)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'value', title: 'Valore (es. 42+)', type: 'string'},
            {name: 'label', title: 'Etichetta (es. Clienti soddisfatti)', type: 'string'},
          ],
          preview: {select: {title: 'value', subtitle: 'label'}},
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Impostazioni Sito'}
    },
  },
})
