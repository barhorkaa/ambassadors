import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('ambassador')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('uco', 'integer', (col) => col.notNull())
    .addColumn('name', 'varchar(50)', (col) => col.notNull())
    .addColumn('email', 'varchar(50)', (col) => col.notNull())
    .addColumn('phone_number', 'varchar(15)', (col) => col.notNull())
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('updated_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('deleted_at', 'timestamp', (col) =>
      col.defaultTo(sql`null`)
    )
    .execute()

  await db.schema
    .createTable('event')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('name', 'varchar(69)', (col) => col.notNull())
    .addColumn('date', 'timestamp', (col) => col.notNull())
    .addColumn('event_type_id', 'integer', (col) =>
      col.references('eventType.id').onDelete('cascade').notNull()
    )
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('updated_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('deleted_at', 'timestamp', (col) =>
      col.defaultTo(sql`null`)
    )
    .execute()

  await db.schema
    .createTable('eventType')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('name', 'varchar(50)', (col) => col.notNull())
    .addColumn('description', 'varchar(500)', (col) => col.notNull())
    .addColumn('instructions', 'varchar(500)', (col) => col.notNull())
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('updated_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('deleted_at', 'timestamp', (col) =>
      col.defaultTo(sql`null`)
    )
    .execute()

  await db.schema
    .createTable('report')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('ambassador_id', 'integer', (col) => col.references('ambassador.id').notNull())
    .addColumn('number_of_attendees', 'integer', (col) => col.notNull())
    .addColumn('notes', 'varchar(500)')
    .addColumn('ideas', 'varchar(500)')
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('updated_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('deleted_at', 'timestamp', (col) =>
      col.defaultTo(sql`null`)
    )
    .execute()

  await db.schema
    .createTable('material')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('name', 'varchar(50)', (col) => col.notNull())
    .addColumn('description', 'varchar(500)')
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('updated_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('deleted_at', 'timestamp', (col) =>
      col.defaultTo(sql`null`)
    )
    .execute()

  await db.schema
    .createTable('registerForm')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('ambassador_id', 'integer', (col) => col.references('ambassador.id').notNull())
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('updated_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('deleted_at', 'timestamp', (col) =>
      col.defaultTo(sql`null`)
    )
    .execute()

  await db.schema
    .createTable('eventAmbassador')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('ambassador_id', 'integer', (col) => col.references('ambassador.id').notNull())
    .addColumn('event_id', 'integer', (col) => col.references('event.id').notNull())
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('updated_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('deleted_at', 'timestamp', (col) =>
      col.defaultTo(sql`null`)
    )
    .execute()

  await db.schema
    .createTable('materialReport')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('material_id', 'integer', (col) => col.references('material.id').notNull())
    .addColumn('report_id', 'integer', (col) => col.references('report.id').notNull())
    .addColumn('amount', 'integer')
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('updated_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn('deleted_at', 'timestamp', (col) =>
      col.defaultTo(sql`null`)
    )
    .execute()


  // await db.schema
  //   .createIndex('pet_owner_id_index')
  //   .on('pet')
  //   .column('owner_id')
  //   .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('ambassador').execute()
  await db.schema.dropTable('event').execute()
}