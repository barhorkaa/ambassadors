import { db } from '@/database/database';
import { DatabaseError } from '@/database/errors/database-error';
import { MaterialAmountModel, ReportModel } from '@/models/report-models';
import { objectToCamel, objectToSnake } from 'ts-case-convert';

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

export async function getEventReport(eventId: string) {
  try {
    const reportList = await db.selectFrom('report').where('event_id', '=', eventId).selectAll().execute();

    if (reportList.length !== 1) {
      return undefined;
    }
    const report = reportList[0];

    const materials = await db
      .selectFrom('materialReport')
      .where('report_id', '=', report.id)
      .leftJoin('material', 'material.id', 'material_id')
      .select(['material_id', 'amount', 'material.name as material_name'])
      .execute();

    const camel = objectToCamel(report);
    return {
      ...camel,
      ideas: report.ideas!,
      notes: report.notes!,
      materials: materials.map((mat) => {
        return { materialId: mat.material_id, amount: mat.amount!, materialName: mat.material_name! };
      }),
    };
  } catch (e) {
    console.error(e);
    throw new DatabaseError({
      name: 'DATABASE_CREATE_ERROR',
      message: 'Unable to create report material records',
      cause: e,
    });
  }
}

export async function approveReport(id: string) {
  try {
    await db.updateTable('report').where('id', '=', id).set({ approved: true, updated_at: new Date() }).execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({
      name: 'DATABASE_UPDATE_ERROR',
      message: 'Unable to approve report',
      cause: e,
    });
  }
}
