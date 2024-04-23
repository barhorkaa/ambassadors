import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .alterTable('eventUser')
    .dropColumn('deleted_at')
    .addColumn('substitute', 'boolean', (col) => col.defaultTo(false))
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema
    .alterTable('eventUser')
    .addColumn('deleted_at', 'timestamp', (col) => col.defaultTo(sql`null`))
    .dropColumn('substitute')
    .execute();
}
