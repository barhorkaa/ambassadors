import { Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .alterTable('report')
    .alterColumn('notes', (col) => col.setDataType('varchar'))
    .alterColumn('ideas', (col) => col.setDataType('varchar'))
    .execute();

  await db.schema
    .alterTable('material')
    .alterColumn('description', (col) => col.setDataType('varchar'))
    .execute();

  await db.schema
    .alterTable('eventType')
    .alterColumn('instructions', (col) => col.setDataType('varchar'))
    .alterColumn('description', (col) => col.setDataType('varchar'))
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema
    .alterTable('eventType')
    .alterColumn('instructions', (col) => col.setDataType('varchar(500)'))
    .alterColumn('description', (col) => col.setDataType('varchar(500)'))
    .execute();

  await db.schema
    .alterTable('material')
    .alterColumn('description', (col) => col.setDataType('varchar(500)'))
    .execute();

  await db.schema
    .alterTable('report')
    .alterColumn('notes', (col) => col.setDataType('varchar(500)'))
    .alterColumn('ideas', (col) => col.setDataType('varchar(500)'))
    .execute();
}
