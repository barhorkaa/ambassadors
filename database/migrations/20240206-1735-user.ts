import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .alterTable('user')
    .addColumn('password', 'varchar(100)', (col) => col.notNull())
    .addColumn('role', sql`enum('manager', 'ambassador')`, (col) => col.notNull().defaultTo('ambassador'))
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.alterTable('user')
    .dropColumn('password')
    .dropColumn('role')
    .execute()
}