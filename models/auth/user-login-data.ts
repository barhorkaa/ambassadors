import { z } from "zod";

export const UserLoginData = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});