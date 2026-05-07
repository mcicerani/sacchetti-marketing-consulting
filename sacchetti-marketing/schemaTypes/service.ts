import {defineField, defineType} from 'sanity'

const iconOptions = [
  {title: 'Social Media (cuore)', value: 'FaHeart'},
  {title: 'Siti Web (globo)', value: 'TbWorldWww'},
  {title: 'Foto & Video', value: 'FaPhotoVideo'},
  {title: 'Organizzazione Eventi (calendario)', value: 'FaCalendar'},
  {title: 'Consulenza Aziendale (business)', value: 'TbBusinessplan'},
  {title: 'Ufficio Stampa (megafono)', value: 'GrAnnounce'},
]

export default defineType({
  name: 'service',
  title: 'Servizio',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Titolo', type: 'string', validation: (R) => R.required()}),
    defineField({name: 'description', title: 'Descrizione', type: 'text', rows: 3, validation: (R) => R.required()}),
    defineField({
      name: 'iconName',
      title: 'Icona',
      type: 'string',
      options: {list: iconOptions, layout: 'dropdown'},
      validation: (R) => R.required(),
    }),
    defineField({name: 'order', title: 'Ordine', type: 'number', initialValue: 0}),
  ],
  preview: {select: {title: 'title', subtitle: 'iconName'}},
})
