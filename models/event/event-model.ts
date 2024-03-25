import { z } from "zod";

export const eventModel = z.object({
  id: z.string().nullable(),
  name: z.string().nullable(),
  date: z.date().nullable(),
  event_type_id: z.string().nullable(),
  event_type_name: z.string().nullable(),
})
//   .transform((model) => ({
//   eventTypeName: model.event_type_name,
//   eventTypeId: model.event_type_id,
//   ...model
// })).transform((model) => {
//   const { event_type_id, event_type_name, ...rest} = model;
//   return rest
// });

export type EventModel = z.infer<typeof eventModel>