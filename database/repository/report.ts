import { db } from '@/database/database';
import { DatabaseError } from '@/errors/database-error';
import { MaterialAmountModel, ReportModel } from '@/models/report-models';
import { objectToSnake } from 'ts-case-convert';

export async function createReport(report: ReportModel) {
  try {
    const { materials, ...reportInfo } = report;

    const reportId = await db
      .insertInto('report')
      .values(objectToSnake(reportInfo))
      .returning('id')
      .executeTakeFirstOrThrow();

    await createMaterialReports(materials, reportId.id);
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_CREATE_ERROR', message: 'Unable to create report', cause: e });
  }
}

export async function createMaterialReports(materials: MaterialAmountModel[], reportId: string) {
  try {
    const fullMaterials = materials.map((material) => {
      return { material_id: material.materialId, amount: material.amount, report_id: reportId };
    });

    await db.insertInto('materialReport').values(fullMaterials).execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({
      name: 'DATABASE_CREATE_ERROR',
      message: 'Unable to create report material records',
      cause: e,
    });
  }
}
