import { z } from 'zod';

export const materialAmountSchema = z.object({
  materialId: z.string(),
  amount: z.string().pipe(z.coerce.number()),
});
export type MaterialAmountModel = z.infer<typeof materialAmountSchema>;
