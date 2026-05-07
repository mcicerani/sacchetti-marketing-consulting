import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Impostazioni Sito',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'stats',
      title: 'Statistiche (strip rossa)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Valore (es. 42+)', type: 'string' },
          { name: 'label', title: 'Etichetta', type: 'string' },
        ],
        preview: { select: { title: 'value', subtitle: 'label' } },
      }],
    }),
    defineField({
      name: 'aboutColumns',
      title: 'Sezione Agenzia (3 colonne)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'iconName', title: 'Icona (es. FaUsers)', type: 'string' },
          { name: 'title', title: 'Titolo', type: 'string' },
          { name: 'text', title: 'Testo', type: 'text' },
        ],
        preview: { select: { title: 'title', subtitle: 'iconName' } },
      }],
    }),
    defineField({ name: 'heroText', title: 'Testo Hero', type: 'string' }),
    defineField({ name: 'heroButton', title: 'Testo bottone Hero', type: 'string' }),
    defineField({ name: 'footerAddress', title: 'Indirizzo', type: 'string' }),
    defineField({ name: 'footerMapsUrl', title: 'Link Google Maps', type: 'url' }),
    defineField({
      name: 'footerPhones',
      title: 'Telefoni',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'person', title: 'Nome', type: 'string' },
          { name: 'number', title: 'Numero', type: 'string' },
        ],
        preview: { select: { title: 'person', subtitle: 'number' } },
      }],
    }),
    defineField({
      name: 'footerEmails',
      title: 'Email',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'footerInstagram', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'footerFacebook', title: 'Facebook URL', type: 'url' }),
    defineField({ name: 'footerPiva', title: 'P.IVA', type: 'string' }),
    defineField({
      name: 'servizioSteps',
      title: 'Step processo (sezione servizi)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'portfolioSubtitle', title: 'Testo introduttivo Portfolio', type: 'text', rows: 3 }),
    defineField({ name: 'clientiTitle', title: 'Titolo sopra carousel clienti', type: 'string' }),
    defineField({ name: 'whatsappNumber', title: 'Numero WhatsApp (solo cifre, con prefisso)', type: 'string' }),
    defineField({ name: 'whatsappMessage', title: 'Messaggio WhatsApp predefinito', type: 'string' }),
  ],
  preview: {
    prepare() { return { title: 'Impostazioni Sito' }; },
  },
});
