export default {
  name: 'testimonial',
  title: 'Testimonianza',
  type: 'document',
  fields: [
    {
      name: 'testo',
      title: 'Testo',
      type: 'text',
      rows: 4,
      validation: (R) => R.required(),
    },
    {
      name: 'nome',
      title: 'Nome',
      type: 'string',
      validation: (R) => R.required(),
    },
    {
      name: 'ruolo',
      title: 'Ruolo / Azienda',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Ordine',
      type: 'number',
      initialValue: 0,
    },
  ],
  preview: {
    select: { title: 'nome', subtitle: 'ruolo' },
  },
};
