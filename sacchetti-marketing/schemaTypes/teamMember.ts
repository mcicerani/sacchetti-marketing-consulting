import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Membro del Team',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Nome', type: 'string', validation: (R) => R.required()}),
    defineField({name: 'role', title: 'Ruolo', type: 'string', validation: (R) => R.required()}),
    defineField({name: 'photo', title: 'Foto', type: 'image', options: {hotspot: true}}),
    defineField({name: 'linkedin', title: 'LinkedIn URL', type: 'url'}),
    defineField({name: 'order', title: 'Ordine', type: 'number', initialValue: 0}),
  ],
  preview: {select: {title: 'name', subtitle: 'role', media: 'photo'}},
})
