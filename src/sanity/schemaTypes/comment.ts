import { defineField, defineType } from 'sanity';

const comment = defineType(// schemas/comment.js
   {
    name: "comment",
    title: "Comment",
    type: "document",
    fields: [
      defineField({
        name: "name",
        title: "Name",
        type: "string",
      }),
      defineField({
        name: "comment",
        title: "Comment",
        type: "text",
      }),
      defineField({
        name: "post",
        title: "Post",
        type: 'string'
      }),
    ],
  });
export default comment;