import { z } from 'zod';

export const motivationSchema = z.object({
  why: z.string(),
  who: z.string(),
  goals: z.string(),
  preferredEvents: z.string(),
  time: z.string(),
  userId: z.string(),
});
export type MotivationModel = z.infer<typeof motivationSchema>;
