export type EventTypeMinModel = {
  id: string;
  name: string;
};

import { z } from 'zod';

export const eventTypeDefaultModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  instructions: z.string(),
});

export type EventTypeDefaultModel = z.infer<typeof eventTypeDefaultModel>;

export const eventTypeCreateModel = eventTypeDefaultModel.omit({ id: true });

export type EventTypeCreateModel = z.infer<typeof eventTypeCreateModel>;

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
