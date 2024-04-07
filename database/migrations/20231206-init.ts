import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('ambassador')
    .addColumn('id', 'char(36)', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
    .addColumn('uco', 'integer', (col) => col.notNull().unique())
    .addColumn('name', 'varchar(50)', (col) => col.notNull())
    .addColumn('email', 'varchar(50)', (col) => col.notNull().unique())
    .addColumn('phone_number', 'varchar(15)', (col) => col.notNull())
    .addColumn('created_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
    .addColumn('updated_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
    .addColumn('deleted_at', 'timestamp', (col) => col.defaultTo(sql`null`))
    .execute()

  await db.schema
    .createTable('eventType')
    .addColumn('id', 'char(36)', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
    .addColumn('name', 'varchar(50)', (col) => col.notNull().unique())
    .addColumn('description', 'varchar(500)', (col) => col.notNull())
    .addColumn('instructions', 'varchar(500)', (col) => col.notNull())
    .addColumn('created_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
    .addColumn('updated_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
    .addColumn('deleted_at', 'timestamp', (col) => col.defaultTo(sql`null`))
    .execute()

  await db.schema
    .createTable('event')
    .addColumn('id', 'char(36)', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
    .addColumn('name', 'varchar(69)', (col) => col.notNull())
    .addColumn('date', 'timestamp', (col) => col.defaultTo(sql`null`))
    .addColumn('event_type_id', 'char(36)', (col) => col.references('eventType.id').onDelete('cascade').notNull())
    .addColumn('created_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
    .addColumn('updated_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
    .addColumn('deleted_at', 'timestamp', (col) => col.defaultTo(sql`null`))
    .execute()

  await db.schema
    .createTable('report')
    .addColumn('id', 'char(36)', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
    .addColumn('ambassador_id', 'char(36)', (col) => col.references('ambassador.id').notNull())
    .addColumn('number_of_attendees', 'integer', (col) => col.notNull())
    .addColumn('notes', 'varchar(500)')
    .addColumn('ideas', 'varchar(500)')
    .addColumn('created_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
    .addColumn('updated_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
    .addColumn('deleted_at', 'timestamp', (col) => col.defaultTo(sql`null`))
    .execute()

  await db.schema
    .createTable('material')
    .addColumn('id', 'char(36)', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
    .addColumn('name', 'varchar(50)', (col) => col.notNull().unique())
    .addColumn('description', 'varchar(500)')
    .addColumn('created_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
    .addColumn('updated_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
    .addColumn('deleted_at', 'timestamp', (col) => col.defaultTo(sql`null`))
    .execute()

  await db.schema
    .createTable('registerForm')
    .addColumn('id', 'char(36)', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
    .addColumn('ambassador_id', 'char(36)', (col) => col.references('ambassador.id').notNull())
    .addColumn('created_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
    .addColumn('updated_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
    .addColumn('deleted_at', 'timestamp', (col) => col.defaultTo(sql`null`))
    .execute()

  await db.schema
    .createTable('eventAmbassador')
    .addColumn('id', 'char(36)', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
    .addColumn('ambassador_id', 'char(36)', (col) => col.references('ambassador.id').notNull())
    .addColumn('event_id', 'char(36)', (col) => col.references('event.id').notNull())
    .addUniqueConstraint("ambassador_event", ["ambassador_id", "event_id"])
    .addColumn('created_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
    .addColumn('updated_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
    .addColumn('deleted_at', 'timestamp', (col) => col.defaultTo(sql`null`))
    .execute()

  await db.schema
    .createTable('materialReport')
    .addColumn('id', 'char(36)', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
    .addColumn('material_id', 'char(36)', (col) => col.references('material.id').notNull())
    .addColumn('report_id', 'char(36)', (col) => col.references('report.id').notNull())
    .addColumn('amount', 'integer')
    .addColumn('created_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
    .addColumn('updated_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
    .addColumn('deleted_at', 'timestamp', (col) => col.defaultTo(sql`null`))
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('eventAmbassador').execute()
  await db.schema.dropTable('materialReport').execute()
  await db.schema.dropTable('report').execute()
  await db.schema.dropTable('material').execute()
  await db.schema.dropTable('registerForm').execute()
  await db.schema.dropTable('event').execute()
  await db.schema.dropTable('eventType').execute()
  await db.schema.dropTable('ambassador').execute()
}