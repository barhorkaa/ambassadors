import { z } from 'zod';

export const materialFullModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  deleted_at: z.date().nullable(),
});

export type MaterialFullModel = z.infer<typeof materialFullModel>;
