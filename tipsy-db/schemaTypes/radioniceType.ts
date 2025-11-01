import {defineField, defineType} from 'sanity'

export const radioniceType = defineType({
  name: 'radionice',
  title: 'Radionice',
  type: 'document',
  fields: [
    defineField({
      name: 'naslov',
      title: 'Naslov',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'Naslov'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'kategorija',
      title: 'Kategorija',
      type: 'reference',
      to: [{type: 'kategorijaRadionica'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'opis',
      title: 'Opis radionice',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'datum',
      title: 'Opis radionice',
      description:
        'Unesite datum u ovome formatu: 15.12.2025 - bez razmaka, sa točkama u DD/MM/YYYY formatu',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'vrijeme',
      title: 'Vrijeme',
      description:
        'Vrijeme mora biti unešeno u hh:mm formatu - npr. 08:00 / 10:00 / 18:00 Bez dodatnih znakova kao "h" ',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'kapacitet',
      title: 'Kapacitet radionice (koliko ljudi)',
      type: 'number',
      initialValue: 1,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rezervirano',
      title: 'Koliko se ljudi prijavilo',
      type: 'number',
      initialValue: 1,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cijena',
      title: 'Cijena radionice po osobi',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'opisRada',
      title: 'Što čemo raditi',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ukljuceno',
      title: 'Što je uključeno',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Naslovna slika radionice',
      type: 'image',
    }),
    defineField({
      name: 'lokacija',
      title: 'Lokacija',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'trajanje',
      title: 'Trajanje u satima',
      description: 'Ako radionica traje dva sata treba se samo upisati "2"',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
  ],
})
