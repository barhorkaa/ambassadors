import { z } from 'zod';

export const eventTypeSchema = z.object({
  id: z.string().optional(),
  name: z.string({ required_error: 'Jméno je povinný údaj.' }),
  description: z.string({ required_error: 'Popis je povinný údaj.' }),
  instructions: z.string({ required_error: 'Instrukce jsou povinný údaj.' }),
});
export type EventTypeManipulationModel = z.infer<typeof eventTypeSchema>;

export type EventTypeMinModel = {
  id: string;
  name: string;
};

export type EventTypeDetailModel = EventTypeMinModel & {
  description: string;
  instructions: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};
