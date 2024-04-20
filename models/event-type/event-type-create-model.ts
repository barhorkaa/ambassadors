import { z } from 'zod';

export const eventTypeCreateModel = z.object({
  name: z.string(),
  description: z.string(),
  instructions: z.string(),
});

export type EventTypeCreateModel = z.infer<typeof eventTypeCreateModel>;
