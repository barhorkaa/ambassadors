import { Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.alterTable('report').dropColumn('user_id').execute();

  await db.schema
    .alterTable('report')
    .addColumn('event_id', 'char(36)', (col) => col.references('event.id').notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.alterTable('report').dropColumn('event_id').execute();

  await db.schema
    .alterTable('report')
    .addColumn('user_id', 'char(36)', (col) => col.references('ambassador.id').notNull())
    .execute();
}
