import { z } from 'zod';

export const registrationModel = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  uco: z.string().min(6).max(6).pipe(z.coerce.number()),
  phone_number: z.string().min(9).max(16),
});

export type RegistrationModel = z.infer<typeof registrationModel>;
