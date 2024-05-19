import { z } from 'zod';

export const eventSchema = z.object({
  id: z.string().optional(),
  name: z.string({ required_error: 'Název akce je povinný údaj' }),
  date: z.string().pipe(z.coerce.date()).nullable(),
  limit: z
    .string({ required_error: 'Limit počtu ambasadorů je povinný údaj' })
    .pipe(z.coerce.number().max(30, { message: 'Maximální počet ambasadorů na akci je 30' })),
  eventTypeId: z.string({ required_error: 'Typ akce je povinný údaj' }),
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
