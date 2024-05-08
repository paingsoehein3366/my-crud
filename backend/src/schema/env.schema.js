const { z } = require('zod');
module.exports = z.object({
      PORT: z.coerce.number().optional(),
      NODE_ENV: z.enum(['local', 'development'], {
            required_error: 'NODE_ENV is missing.',
      }),
      DATABASE: z.string({
            required_error: 'MONGODB_URI is missing.',
      }),
});