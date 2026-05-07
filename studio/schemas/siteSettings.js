export default {
  name: 'siteSettings',
  title: 'Impostazioni Sito',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'stats',
      title: 'Statistiche (strip rossa)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Valore (es. 42+)', type: 'string' },
            { name: 'label', title: 'Etichetta (es. Clienti soddisfatti)', type: 'string' },
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        },
      ],
    },
  ],
  preview: {
    select: { title: 'Impostazioni Sito' },
    prepare() {
      return { title: 'Impostazioni Sito' };
    },
  },
};
