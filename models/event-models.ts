import { z } from 'zod';
import { zfd } from 'zod-form-data';

export const eventSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  date: z.string().pipe(z.coerce.date()).nullable(),
  limit: z.string().pipe(z.coerce.number()),
  event_type_id: z.string(),
  approved: z.string().pipe(z.coerce.boolean()).default(''),
});
export type EventBasicModel = z.infer<typeof eventSchema>;

export const eventFormModel = zfd.formData({
  id: zfd.text(z.string().optional()),
  name: zfd.text(z.string()),
  date: zfd.text(z.preprocess((arg) => (arg === '' ? null : arg), z.string().pipe(z.coerce.date()))),
  limit: zfd.text(z.string().pipe(z.coerce.number())),
  event_type_id: zfd.text(z.string()),
  approved: zfd.text(z.string().pipe(z.coerce.boolean()).default('')),
});

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
