import { z } from 'zod';

export const eventDetailModel = z.object({
  id: z.string(),
  name: z.string(),
  date: z.date().nullable(),
  event_type_id: z.string(),
  approved: z.boolean(),
  limit: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  deleted_at: z.date().nullable(),
});

export type EventDetailModel = z.infer<typeof eventDetailModel>;
