import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'clienteLogo',
  title: 'Cliente Logo',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nome cliente', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true }, validation: (r) => r.required() }),
    defineField({ name: 'url', title: 'Sito web', type: 'url' }),
    defineField({ name: 'order', title: 'Ordine', type: 'number' }),
  ],
  orderings: [{ title: 'Ordine', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name', media: 'logo' } },
});
