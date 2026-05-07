export default {
  name: 'portfolioProject',
  title: 'Cliente / Portfolio',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome Cliente',
      type: 'string',
      validation: (R) => R.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'url',
      title: 'Sito Web',
      type: 'url',
    },
    {
      name: 'order',
      title: 'Ordine',
      type: 'number',
      initialValue: 0,
    },
  ],
  preview: {
    select: { title: 'name', media: 'logo' },
  },
};
