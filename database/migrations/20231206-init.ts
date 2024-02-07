import { Kysely, sql } from 'kysely'
import {randomUUID} from "crypto";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('ambassador')
    .addColumn('id', 'char(36)', (col) => col.primaryKey().defaultTo(randomUUID()))
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
    .addColumn('id', 'char(36)', (col) => col.primaryKey().defaultTo(randomUUID()))
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
    .addColumn('id', 'char(36)', (col) => col.primaryKey().defaultTo(randomUUID()))
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
    .addColumn('id', 'char(36)', (col) => col.primaryKey().defaultTo(randomUUID()))
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
    .addColumn('id', 'char(36)', (col) => col.primaryKey().defaultTo(randomUUID()))
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
    .addColumn('id', 'char(36)', (col) => col.primaryKey().defaultTo(randomUUID()))
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
    .addColumn('id', 'char(36)', (col) => col.primaryKey().defaultTo(randomUUID()))
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
    .addColumn('id', 'char(36)', (col) => col.primaryKey().defaultTo(randomUUID()))
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

  //   na zrychlenie hladania
  // b tree dobre na od do
  // hashovanie na primarnych klucoch -> cez to sa joinuje
  // pozriet ci ma mysql index na pk
  // dobre vedie na statnice
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('ambassador').execute()
  await db.schema.dropTable('event').execute()
  await db.schema.dropTable('eventType').execute()
  await db.schema.dropTable('report').execute()
  await db.schema.dropTable('material').execute()
  await db.schema.dropTable('eventAmbassador').execute()
  await db.schema.dropTable('materialReport').execute()
  await db.schema.dropTable('registerForm').execute()
}