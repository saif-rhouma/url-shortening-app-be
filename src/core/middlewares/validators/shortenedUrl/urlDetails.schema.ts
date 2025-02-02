import { z } from 'zod';

export const getUrlDetailsSchema = z.object({
  shortCode: z.string().max(10).min(10),
});

export type GetUrlDetailsSchema = z.infer<typeof getUrlDetailsSchema>;
