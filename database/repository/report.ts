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

  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_CREATE_ERROR', message: 'Unable to create report', cause: e });
  }
}

