import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolioProject',
  title: 'Progetto Portfolio',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Titolo', type: 'string', validation: (R) => R.required()}),
    defineField({name: 'description', title: 'Descrizione', type: 'text', rows: 3, validation: (R) => R.required()}),
    defineField({name: 'image', title: 'Immagine', type: 'image', options: {hotspot: true}, validation: (R) => R.required()}),
    defineField({name: 'order', title: 'Ordine', type: 'number', initialValue: 0}),
  ],
  preview: {select: {title: 'title', media: 'image'}},
})
