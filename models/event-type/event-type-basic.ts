import { z } from 'zod';

export const eventTypeBasicModel = z.object({
  id: z.string(),
  name: z.string(),
});

export type EventTypeBasicModel = z.infer<typeof eventTypeBasicModel>;
