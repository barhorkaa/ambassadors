import { Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.alterTable('ambassador').renameTo('user').execute();

  await db.schema.alterTable('eventAmbassador').renameTo('eventUser').execute();

  await db.schema.alterTable('eventUser').renameColumn('ambassador_id', 'user_id').execute();

  await db.schema.alterTable('registerForm').renameColumn('ambassador_id', 'user_id').execute();

  await db.schema.alterTable('report').renameColumn('ambassador_id', 'user_id').execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.alterTable('report').renameColumn('user_id', 'ambassador_id').execute();

  await db.schema.alterTable('registerForm').renameColumn('user_id', 'ambassador_id').execute();

  await db.schema.alterTable('eventUser').renameColumn('user_id', 'ambassador_id').execute();

  await db.schema.alterTable('eventUser').renameTo('eventAmbassador').execute();

  await db.schema.alterTable('user').renameTo('ambassador').execute();
}
