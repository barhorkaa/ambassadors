import { z } from 'zod';

export const userSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string().email().optional(),
  password: z.string().optional(),
  uco: z.string().min(6).max(6).pipe(z.coerce.number()).optional(),
  phone_number: z.string().min(9).max(16),
});
export type UserManipulationModel = z.infer<typeof userSchema>;

export type UserModel = {
  id: string;
  uco: number;
  email: string;
  name: string;
  phone_number: string;
  password: string;
  role: 'ambassador' | 'manager';
  approved: boolean;
  motivated: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
};
