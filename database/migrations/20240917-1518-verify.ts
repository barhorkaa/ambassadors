import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .alterTable('user')
    .addColumn('verification_token', 'varchar', (col) =>
      col.defaultTo(sql`substring(replace(gen_random_uuid()::text, '-', ''), 1, 8)`)
    )
    .addColumn('email_verified', 'boolean', (col) => col.defaultTo(false).notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.alterTable('user').dropColumn('verification_token').execute();
  await db.schema.alterTable('user').dropColumn('email_verified').execute();
}
