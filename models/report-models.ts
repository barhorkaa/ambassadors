import { z } from 'zod';

export const materialAmountSchema = z.object({
  materialId: z.string(),
  amount: z.string().pipe(z.coerce.number()),
});
export type MaterialAmountModel = z.infer<typeof materialAmountSchema>;

export const reportSchema = z.object({
  eventId: z.string(),
  numberOfAttendees: z.string().pipe(z.coerce.number()),
  notes: z.string(),
  ideas: z.string(),
  materials: materialAmountSchema.array(),
  // ambassadors: z.string(),
});
export type ReportModel = z.infer<typeof reportSchema>;