import { requiredString } from '@/models/utils';
import { z } from 'zod';

export const eventTypeSchema = z.object({
  id: z.string().optional(),
  name: z.string({ required_error: 'Jméno je povinný údaj.' }),
  description: requiredString,
  instructions: requiredString,
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
