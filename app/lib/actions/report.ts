'use server';

import { handleError } from '@/app/lib/actions/form-errors';
import { approveReport, createReport } from '@/database/repository/report';
import { reportSchema } from '@/models/report-models';
import { revalidatePath } from 'next/cache';

export async function createReportAction(prevState: any, formData: FormData) {
  try {
    const materials_amounts = {
      materialIds: formData.getAll('materialId'),
      materialAmounts: formData.getAll('amount'),
    };

    const materials = materials_amounts.materialIds.map((mat, i) => {
      return { materialId: mat, amount: materials_amounts.materialAmounts[i] };
    });

    const reportForm = {
      eventId: formData.get('eventId'),
      ideas: formData.get('ideas'),
      notes: formData.get('notes'),
      numberOfAttendees: formData.get('numberOfAttendees'),
      materials: materials,
    };

    const parsedData = reportSchema.parse(reportForm);

    await createReport(parsedData);
  } catch (e) {
    console.error(e);
    return handleError(e);
  }
  revalidatePath('/events/[id]/page');
  return { success: true, errors: [], generic: undefined };
}

export async function approveReportAction(id: string) {
  try {
    await approveReport(id);
  } catch (e) {
    console.error(e);
    throw e;
  }
  revalidatePath('/events/[id]/page');
}
