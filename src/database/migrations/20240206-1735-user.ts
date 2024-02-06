import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .alterTable('user')
    .addColumn('password', 'varchar(100)', (col) => col.notNull())
    .addColumn('type', sql`enum('manager', 'ambassador')`, (col) => col.notNull().defaultTo('ambassador'))
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.alterTable('ambassador')
    .dropColumn('password')
    .dropColumn('type')
    .execute()
}