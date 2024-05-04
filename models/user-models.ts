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

import { z } from 'zod';

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  phone_number: z.string(),
  uco: z.string().pipe(z.coerce.number()).optional(),
  email: z.string().optional(),
});

export type UserEditFullModel = z.infer<typeof userSchema>;
