import { defineType, defineField } from 'sanity';

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({ name: 'clientName', title: 'Client Name', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'clientName' }, validation: (R) => R.required() }),
    defineField({
      name: 'clientType',
      title: 'Client Type',
      type: 'string',
      options: { list: ['Government', 'Healthcare', 'Banking', 'Retail', 'Logistics', 'Private'] },
    }),
    defineField({ name: 'problem', title: 'Problem', type: 'text', rows: 3 }),
    defineField({ name: 'solution', title: 'Solution Delivered', type: 'text', rows: 3 }),
    defineField({ name: 'result', title: 'Result / Outcome', type: 'text', rows: 3 }),
    defineField({ name: 'relatedSolution', title: 'Related Solution', type: 'reference', to: [{ type: 'solution' }] }),
  ],
});
