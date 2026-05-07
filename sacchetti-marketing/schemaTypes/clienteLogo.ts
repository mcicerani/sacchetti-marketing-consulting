import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'clienteLogo',
  title: 'Cliente (Logo Strip)',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Nome Cliente', type: 'string', validation: (R) => R.required()}),
    defineField({name: 'logo', title: 'Logo', type: 'image', options: {hotspot: true}}),
    defineField({name: 'url', title: 'Sito Web', type: 'url'}),
    defineField({name: 'order', title: 'Ordine', type: 'number', initialValue: 0}),
  ],
  preview: {select: {title: 'name', media: 'logo'}},
})
