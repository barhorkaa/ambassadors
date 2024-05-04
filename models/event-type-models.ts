export type EventTypeMinModel = {
  id: string;
  name: string;
};

import { z } from 'zod';

export const eventTypeSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  instructions: z.string(),
});
export type EventTypeManipulationModel = z.infer<typeof eventTypeSchema>;

export const eventTypeDetailModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  instructions: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  deleted_at: z.date().nullable(),
});

export type EventTypeDetailModel = z.infer<typeof eventTypeDetailModel>;
