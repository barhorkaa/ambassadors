import { requiredString } from '@/models/utils';
import { z } from 'zod';

export const materialAmountSchema = z.object({
  materialId: z.string(),
  materialName: z.string({ required_error: 'Jméno je povinný údaj.' }).optional(),
  amount: z.string({ required_error: 'Počet je povinný údaj.' }).pipe(z.coerce.number()),
});
export type MaterialAmountModel = z.infer<typeof materialAmountSchema>;

export const reportSchema = z.object({
  eventId: z.string(),
  numberOfAttendees: z.string().pipe(z.coerce.number()),
  notes: requiredString,
  ideas: requiredString,
  materials: materialAmountSchema.array(),
});
export type ReportModel = z.infer<typeof reportSchema>;

export type ReportDetailModel = ReportModel & {
  createdAt: Date;
  deletedAt: Date | null;
  updatedAt: Date;
};
