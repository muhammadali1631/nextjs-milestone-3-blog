import { type SchemaTypeDefinition } from 'sanity'
import blog from './Blog'
import test from './test'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, test],
}
