import { z } from 'zod';

export const motivationSchema = z.object({
  why: z.string({ required_error: 'Toto je povinný údaj.' }),
  who: z.string({ required_error: 'Toto je povinný údaj.' }),
  goals: z.string({ required_error: 'Toto je povinný údaj.' }),
  preferredEvents: z.string({ required_error: 'Toto je povinný údaj.' }),
  time: z.string({ required_error: 'Toto je povinný údaj.' }),
  userId: z.string({ required_error: 'Toto je povinný údaj.' }),
});
export type MotivationModel = z.infer<typeof motivationSchema>;
