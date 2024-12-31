import { defineField, defineType } from 'sanity';

const test = defineType({
    name: 'test',
  title: 'test',
  type: 'document',
  fields: [
    defineField({
    name: 'tags', // Field name
    title: 'Tags', // Field title
    type: 'array', // Define this as an array
    of: [{ type: 'string' }] // Specify that the array contains strings
  })
  ]
})

export default test;