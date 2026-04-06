import { defineType, defineField } from 'sanity';

export const clientDoc = defineType({
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Client Name', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: [
        { title: 'Government', value: 'government' },
        { title: 'Private Sector', value: 'private' },
        { title: 'GCC Clients', value: 'gcc' },
      ]},
      validation: (R) => R.required(),
    }),
  ],
});
