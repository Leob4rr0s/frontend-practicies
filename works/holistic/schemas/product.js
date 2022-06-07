export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options:{
                hotspot: true
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'string',
            options:{
                source: 'name',
                maxLength: 96
            }
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string'
        },
        {
            name: 'countInStock',
            title: 'CountInStock',
            type: 'number'
        },
        {
            name: 'link',
            title: 'Link',
            type: 'string'
        },
    ]
}