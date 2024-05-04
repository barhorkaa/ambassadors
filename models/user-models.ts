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

export const userEditFullModel = z.object({
  id: z.string(),
  name: z.string(),
  phone_number: z.string(),
  uco: z.string().pipe(z.coerce.number()),
  email: z.string(),
});

export type UserEditFullModel = z.infer<typeof userEditFullModel>;

export const userEditSelfModel = z.object({
  id: z.string(),
  name: z.string(),
  phone_number: z.string(),
});

export type UserEditSelfModel = z.infer<typeof userEditSelfModel>;
