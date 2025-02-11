const { z } = require('zod');

const itemsSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  price: z.number({ invalid_type_error: 'Price must be a number' }).positive('Price must be a positive number'),
});

module.exports = itemsSchema;