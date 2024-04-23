import { Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .alterTable('event')
    .addColumn('limit', 'numeric', (col) => col.defaultTo(1))
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.alterTable('event').dropColumn('limit').execute();
}
