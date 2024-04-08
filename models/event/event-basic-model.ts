import {z} from "zod";

export const eventBasicModel = z.object({
  id: z.string().optional(),
  name: z.string(),
  date: z.string().pipe( z.coerce.date() ).nullable(),
  event_type_id: z.string(),
  approved: z.string().pipe(z.coerce.boolean()).default("")
})

export type EventBasicModel = z.infer<typeof eventBasicModel>