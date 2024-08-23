import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('notifications')
    .ifNotExists()
    .addColumn('id', 'char(36)', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
    .addColumn('user_id', 'char(36)', (col) => col.references('user.id').notNull())
    .addColumn('registration_approve', 'boolean', (col) => col.notNull().defaultTo(false))
    .addColumn('signup_approve', 'boolean', (col) => col.notNull().defaultTo(false))
    .addColumn('event_approve', 'boolean', (col) => col.notNull().defaultTo(false))
    .addColumn('report_approve', 'boolean', (col) => col.notNull().defaultTo(false))
    .addColumn('personal_info_change', 'boolean', (col) => col.notNull().defaultTo(false))
    .addColumn('event-change', 'boolean', (col) => col.notNull().defaultTo(false))
    .addColumn('new_event', 'boolean', (col) => col.notNull().defaultTo(false))
    .addColumn('new_event_suggestion_manager', 'boolean', (col) => col.notNull().defaultTo(false))
    .addColumn('new_registration_manager', 'boolean', (col) => col.notNull().defaultTo(false))
    .addColumn('new_signup_manager', 'boolean', (col) => col.notNull().defaultTo(false))
    .addColumn('new_report_manager', 'boolean', (col) => col.notNull().defaultTo(false))
    .execute();

  await db.schema
    .createTable('notifications_manager')
    .ifNotExists()
    .addColumn('id', 'char(36)', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
    .addColumn('user_id', 'char(36)', (col) => col.references('user.id').notNull())
    .addColumn('new_event_suggestion', 'boolean', (col) => col.notNull().defaultTo(false))
    .addColumn('new_registration', 'boolean', (col) => col.notNull().defaultTo(false))
    .addColumn('new_signup', 'boolean', (col) => col.notNull().defaultTo(false))
    .addColumn('new_report', 'boolean', (col) => col.notNull().defaultTo(false))
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('notifications').ifExists().execute();
  await db.schema.dropTable('notifications_manager').ifExists().execute();
}
