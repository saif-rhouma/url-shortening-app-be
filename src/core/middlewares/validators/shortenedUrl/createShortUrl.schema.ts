import { z } from 'zod';

export const createShortUrlSchema = z.object({
  url: z.string().url({ message: 'Invalid URL address' }),
});

export type CreateShortUrlSchema = z.infer<typeof createShortUrlSchema>;
