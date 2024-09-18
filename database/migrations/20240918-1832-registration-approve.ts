import { Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.alterTable('notifications').dropColumn('registration_approve').execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema
    .alterTable('notifications')
    .addColumn('registration_approve', 'boolean', (col) => col.notNull().defaultTo(true))
    .execute();
}
