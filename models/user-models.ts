import { z } from 'zod';

export const userEditSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email().optional(),
  password: z.string().optional(),
  uco: z.string().min(6).max(6).pipe(z.coerce.number()).optional(),
  phone_number: z.string().min(9).max(16),
  role: z.union([z.literal('ambassador'), z.literal('manager')]).optional(),
});
export type UserEditModel = z.infer<typeof userEditSchema>;

export const userCreateSchema = z.object({
  name: z.string({ required_error: 'Jméno je povinný údaj' }),
  email: z.string({ required_error: 'Email je povinný údaj' }).email('Email nemá validní formát'),
  password: z
    .string({ required_error: 'Heslo je povinný údaj' })
    .min(6, { message: 'Heslo musí obsahovat alespoň 6 znaků' }),
  uco: z
    .string({ required_error: 'UČO je povinný údaj' })
    .max(6, { message: 'UČO může obsahovat nejvíce 6 znaků' })
    .pipe(z.coerce.number()),
  phone_number: z
    .string({ required_error: 'Telefónní číslo je povinný údaj' })
    .min(9, { message: 'Telefńní číslo musí obsahovat alespoň 9 cifer' })
    .max(16, { message: 'Telefńní číslo může obsahovat nejvíc 16 znaků' }),
});
export type UserCreateModel = z.infer<typeof userCreateSchema>;

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
