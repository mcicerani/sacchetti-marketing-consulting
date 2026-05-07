import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonianza',
  type: 'document',
  fields: [
    defineField({name: 'testo', title: 'Testo', type: 'text', rows: 4, validation: (R) => R.required()}),
    defineField({name: 'nome', title: 'Nome', type: 'string', validation: (R) => R.required()}),
    defineField({name: 'ruolo', title: 'Ruolo / Azienda', type: 'string'}),
    defineField({name: 'order', title: 'Ordine', type: 'number', initialValue: 0}),
  ],
  preview: {select: {title: 'nome', subtitle: 'ruolo'}},
})
