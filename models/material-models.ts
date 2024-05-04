import { z } from 'zod';

export const materialSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
});
export type MaterialManipulationModel = z.infer<typeof materialSchema>;

export type MaterialMinModel = {
  id: string;
  name: string;
};

export type MaterialDetailModel = MaterialMinModel & {
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};
