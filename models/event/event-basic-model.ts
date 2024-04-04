import {z} from "zod";

export const eventBasicModel = z.object({
  name: z.string().nullable(),
  date: z.string().pipe( z.coerce.date() ).nullable(),
  event_type_id: z.string().nullable(),
})

export type EventBasicModel = z.infer<typeof eventBasicModel>