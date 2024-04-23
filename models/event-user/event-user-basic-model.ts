import { z } from 'zod';

export const eventUserBasicModel = z.object({
  id: z.string().nullable(),
  user_name: z.string().nullable(),
  user_id: z.string().nullable(),
  event_id: z.string().nullable(),
  event_name: z.string().nullable(),
  approved: z.boolean(),
});

export type EventUserBasicModel = z.infer<typeof eventUserBasicModel>;
