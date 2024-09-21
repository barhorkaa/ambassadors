import { z } from 'zod';

export const passwordSchema = z.object({
  userId: z.string(),
  oldPassword: z
    .string({ required_error: 'Staré heslo je povinný údaj' })
    .min(6, { message: 'Heslo musí obsahovat alespoň 6 znaků' }),
  newPassword: z
    .string({ required_error: 'Nové heslo je povinný údaj' })
    .min(6, { message: 'Heslo musí obsahovat alespoň 6 znaků' }),
});

export const emailSchema = z.object({
  email: z.string({ required_error: 'Email je povinný údaj' }).email('Email nemá validní formát'),
});

export const emailResetSchema = z.object({
  userId: z.string(),
  newPassword: z
    .string({ required_error: 'Nové heslo je povinný údaj' })
    .min(6, { message: 'Heslo musí obsahovat alespoň 6 znaků' }),
});
