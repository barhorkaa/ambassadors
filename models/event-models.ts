import { z } from 'zod';

export const eventSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  date: z.string().pipe(z.coerce.date()).nullable(),
  limit: z.string().pipe(z.coerce.number()),
  eventTypeId: z.string(),
  approved: z.string().pipe(z.coerce.boolean()).default(''),
});
export type EventManipulationModel = z.infer<typeof eventSchema>;

export type EventModel = {
  id: string;
  name: string;
  date: Date | null;
  eventTypeId: string;
  eventTypeName: string | null;
  limit: number;
};

export type EventDetailModel = Omit<EventModel, 'eventTypeName'> & {
  approved: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};
