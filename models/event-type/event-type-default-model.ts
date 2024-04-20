import { z } from 'zod';

export const eventTypeDefaultModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  instructions: z.string(),
});

export type EventTypeDefaultModel = z.infer<typeof eventTypeDefaultModel>;
