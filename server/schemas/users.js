const { z } = require('zod');

const userSchema = z.object({
  name: z.string().min(1, 'Name is required').refine((value) => /^[A-Za-z\s]+$/.test(value), {
    message: 'Name must contain only letters and spaces',
  }),
  email: z.string().email('Invalid email format'),
  role: z.enum(['admin', 'contributor', 'viewer', 'user'], 'Invalid role'),
});

module.exports = userSchema;