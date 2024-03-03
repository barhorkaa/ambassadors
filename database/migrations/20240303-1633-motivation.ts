import { Kysely } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .alterTable('registerForm')
    .renameTo('motivationForm')
    .execute()

  await db.schema.alterTable('motivationForm')
    .addColumn('why', 'varchar')
    .addColumn('who', 'varchar')
    .addColumn('goals', 'varchar')
    .addColumn('preferred_events', 'varchar')
    .addColumn('time', 'varchar')
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.alterTable('motivationForm')
    .dropColumn('why')
    .dropColumn('who')
    .dropColumn('goals')
    .dropColumn('preferred_events')
    .dropColumn('time')
    .execute()

  await db.schema.alterTable('motivationForm').renameTo('registerForm').execute()
}