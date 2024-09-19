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
