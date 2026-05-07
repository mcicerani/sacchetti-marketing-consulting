export default {
  name: 'faqItem',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      name: 'domanda',
      title: 'Domanda',
      type: 'string',
      validation: (R) => R.required(),
    },
    {
      name: 'risposta',
      title: 'Risposta',
      type: 'text',
      rows: 4,
      validation: (R) => R.required(),
    },
    {
      name: 'order',
      title: 'Ordine',
      type: 'number',
      initialValue: 0,
    },
  ],
  preview: {
    select: { title: 'domanda' },
  },
};
