import { z } from "zod";

export const motivationModel = z.object({
  why: z.string(),
  who: z.string(),
  goals: z.string(),
  preferred_events: z.string(),
  time: z.string(),
  user_id: z.string()
});

export type MotivationModel = z.infer<typeof motivationModel>