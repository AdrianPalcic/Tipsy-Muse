import {defineField, defineType} from 'sanity'

export const winePartnersType = defineType({
  name: 'vinski-partneri',
  title: 'Vinski Partneri',
  type: 'document',
  fields: [
    defineField({
      name: 'ime',
      title: 'Ime Partnera',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'opis',
      title: 'Nešto o njima',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Slika partnera',
      description:
        'Ovo nađite na njihovom webu ili stavite neku svoju zamisao, ako nema slike ide placeholder',
      type: 'image',
    }),
    defineField({
      name: 'url',
      title: 'Link na njihov web',
      description: 'Ako postoji',
      type: 'url',
    }),
  ],
})
