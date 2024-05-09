'use server';

import { approveReport, createReport } from '@/database/repository/report';
import { reportSchema } from '@/models/report-models';

export async function createReportAction(formData: FormData) {
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
    throw e;
  }
}

export async function approveReportAction(id: string) {
  try {
    await approveReport(id);
  } catch (e) {
    console.error(e);
    throw e;
  }
}
