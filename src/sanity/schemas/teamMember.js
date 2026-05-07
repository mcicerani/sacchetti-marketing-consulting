export default {
  name: 'teamMember',
  title: 'Membro del Team',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (R) => R.required(),
    },
    {
      name: 'role',
      title: 'Ruolo',
      type: 'string',
      validation: (R) => R.required(),
    },
    {
      name: 'photo',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'linkedin',
      title: 'LinkedIn URL',
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
    select: { title: 'name', subtitle: 'role', media: 'photo' },
  },
};
