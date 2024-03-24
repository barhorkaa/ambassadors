import { z } from "zod";

export const RegistrationFormModel = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  uco: z.number().min(6).max(6),
  phoneNumber: z.string().min(9).max(16),
});