import {z} from "zod";

export const eventBasicModel = z.object({
  name: z.string(),
  date: z.string().pipe( z.coerce.date() ).nullable(),
  event_type_id: z.string(),
})

export type EventBasicModel = z.infer<typeof eventBasicModel>