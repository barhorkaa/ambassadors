import { Kysely } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .alterTable('user')
    .addColumn('approved', "boolean", (col) => col.notNull().defaultTo(false))
    .execute()

  await db.schema
    .alterTable('eventAmbassador')
    .addColumn('approved', "boolean", (col) => col.notNull().defaultTo(false))
    .execute()

  await db.schema
    .alterTable('event')
    .addColumn('approved', "boolean", (col) => col.notNull().defaultTo(false))
    .execute()

  await db.schema
    .alterTable('report')
    .addColumn('approved', "boolean", (col) => col.notNull().defaultTo(false))
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.alterTable('user')
    .dropColumn('approved')
    .execute()

  await db.schema.alterTable('eventAmbassador')
    .dropColumn('approved')
    .execute()

  await db.schema.alterTable('event')
    .dropColumn('approved')
    .execute()

  await db.schema.alterTable('report')
    .dropColumn('approved')
    .execute()
}