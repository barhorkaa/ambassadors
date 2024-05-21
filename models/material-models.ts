import { z } from 'zod';

export const materialSchema = z.object({
  id: z.string().optional(),
  name: z.string({ required_error: 'Jméno je povinný údaj.' }),
  description: z.string({ required_error: 'Popis je povinný údaj.' }),
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
