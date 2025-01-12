import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string'
        }),
        defineField({
            name: 'comment',
            title: 'Comment',
            type: 'text'
        }),
        defineField({
            name: 'timestamp',
            title: 'Timestamp',
            type: 'datetime',
          }),
        defineField({
            name: 'blog',
            title: 'Blog',
            type: 'reference',
            to: [{ type: 'blog' }]
        })
    ]
});

// defineField({
//     name: 'approved',
//     title: 'Approved',
//     type: 'boolean',
//     description: 'Comments won’t show on the site without approval'
// }),