import { z } from "zod";

export const LoginModel = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});