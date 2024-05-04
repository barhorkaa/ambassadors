import { z } from 'zod';

export const eventTypeSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  instructions: z.string(),
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
