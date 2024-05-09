import { Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.alterTable('report').addUniqueConstraint('report_event', ['id', 'event_id']).execute();

  await db.schema
    .alterTable('materialReport')
    .addUniqueConstraint('material_report', ['material_id', 'report_id'])
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.alterTable('materialReport').dropConstraint('material_report').execute();

  await db.schema.alterTable('report').dropConstraint('report_event').execute();
}
