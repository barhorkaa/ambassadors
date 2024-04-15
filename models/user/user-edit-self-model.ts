import { z } from 'zod';

export const userEditSelfModel = z.object({
  id: z.string(),
  name: z.string(),
  phone_number: z.string(),
});

export type UserEditSelfModel = z.infer<typeof userEditSelfModel>;
