import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faqItem',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({name: 'domanda', title: 'Domanda', type: 'string', validation: (R) => R.required()}),
    defineField({name: 'risposta', title: 'Risposta', type: 'text', rows: 4, validation: (R) => R.required()}),
    defineField({name: 'order', title: 'Ordine', type: 'number', initialValue: 0}),
  ],
  preview: {select: {title: 'domanda'}},
})
