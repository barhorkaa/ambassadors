import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('eventGroupEmails')
    .addColumn('id', 'char(36)', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
    .addColumn('event_id', 'char(36)', (col) => col.references('event.id').notNull())
    .addColumn('contents', 'varchar', (col) => col.notNull().defaultTo(''))
    .addColumn('created_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('eventGroupEmails').execute();
}
