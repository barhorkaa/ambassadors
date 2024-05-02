import { Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.alterTable('material').dropColumn('description').execute();

  await db.schema
    .alterTable('material')
    .addColumn('description', 'text', (col) => col.defaultTo('').notNull())
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.alterTable('material').dropColumn('description').execute();

  await db.schema.alterTable('material').addColumn('description', 'varchar(500)').execute();
}
