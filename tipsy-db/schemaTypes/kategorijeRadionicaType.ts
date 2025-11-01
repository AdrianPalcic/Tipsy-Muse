import {defineField, defineType} from 'sanity'

export const kategorijeRadionica = defineType({
  name: 'kategorijaRadionica',
  title: 'Kategorija Radionica',
  type: 'document',
  fields: [
    defineField({
      name: 'ime',
      title: 'Naziv kategorije',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
