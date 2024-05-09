import { Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .alterTable('report')
    .alterColumn('notes', (col) => col.setNotNull())
    .alterColumn('notes', (col) => col.setDefault(''))
    .alterColumn('ideas', (col) => col.setNotNull())
    .alterColumn('ideas', (col) => col.setDefault(''))
    .execute();

  await db.schema
    .alterTable('eventUser')
    .alterColumn('substitute', (col) => col.setNotNull())
    .execute();

  await db.schema
    .alterTable('materialReport')
    .alterColumn('amount', (col) => col.setNotNull())
    .alterColumn('amount', (col) => col.setDefault(0))
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema
    .alterTable('materialReport')
    .alterColumn('amount', (col) => col.dropDefault())
    .alterColumn('amount', (col) => col.dropNotNull())
    .execute();

  await db.schema
    .alterTable('eventUser')
    .alterColumn('substitute', (col) => col.dropNotNull())
    .execute();

  await db.schema
    .alterTable('report')
    .alterColumn('notes', (col) => col.dropDefault())
    .alterColumn('notes', (col) => col.dropNotNull())
    .alterColumn('ideas', (col) => col.dropDefault())
    .alterColumn('ideas', (col) => col.dropNotNull())
    .execute();
}
