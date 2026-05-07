import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'portfolioProject',
  title: 'Progetto Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Immagine',
      type: 'image',
      options: { hotspot: true },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'size',
      title: 'Dimensione card',
      type: 'string',
      options: {
        list: [
          { title: 'Normale (1 col)', value: 'normal' },
          { title: 'Larga (2 col)', value: 'wide' },
          { title: 'Intera (3 col / riga piena)', value: 'full' },
          { title: 'Alta (2 righe)', value: 'tall' },
        ],
        layout: 'radio',
      },
      initialValue: 'normal',
    }),
    defineField({
      name: 'order',
      title: 'Ordine',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'size', media: 'image' },
  },
});
