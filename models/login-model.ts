import { z } from 'zod';

export const LoginModel = z.object({
  email: z.string({ required_error: 'Email je povinný údaj' }).email('Email nemá validní formát'),
  password: z
    .string({ required_error: 'Heslo je povinný údaj' })
    .min(6, { message: 'Heslo musí obsahovat alespoň 6 znaků' }),
});
