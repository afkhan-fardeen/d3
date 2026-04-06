import { defineType, defineField } from 'sanity';

export const solution = defineType({
  name: 'solution',
  title: 'Solution',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (R) => R.required() }),
    defineField({ name: 'shortDesc', title: 'Short Description', type: 'text', rows: 2 }),
    defineField({ name: 'description', title: 'Full Description', type: 'text', rows: 4 }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'title', type: 'string', title: 'Feature Title' },
        { name: 'desc', type: 'text', title: 'Feature Description', rows: 2 },
      ] }],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'icon', title: 'Icon (SVG path key)', type: 'string' }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string' }),
    defineField({ name: 'seoDesc', title: 'SEO Description', type: 'text', rows: 2 }),
    defineField({ name: 'seoKeyword', title: 'Primary SEO Keyword', type: 'string' }),
    defineField({ name: 'arabicTitle', title: 'Arabic Title', type: 'string' }),
    defineField({ name: 'arabicDesc', title: 'Arabic Description', type: 'text', rows: 3 }),
    defineField({
      name: 'relatedSolutions',
      title: 'Related Solutions',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'solution' }] }],
    }),
    defineField({ name: 'industry', title: 'Primary Industry', type: 'reference', to: [{ type: 'industry' }] }),
    defineField({ name: 'caseStudy', title: 'Featured Case Study', type: 'reference', to: [{ type: 'caseStudy' }] }),
  ],
});
