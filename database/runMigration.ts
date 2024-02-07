import * as path from 'path'
import { createPool } from 'mysql2'
import { promises as fs } from 'fs'
import {
  Kysely,
  Migrator,
  FileMigrationProvider,
  MysqlDialect,
} from 'kysely'

import * as dotenv from 'dotenv'
import {DB} from "kysely-codegen";
dotenv.config({ path: '.env.local' })

async function migrateToLatest() {
  const db = new Kysely<DB>({
    dialect: new MysqlDialect({
      pool: createPool({
        host: process.env['MYSQL_HOST'],
        port: +process.env['MYSQL_PORT']!,
        user: process.env['MYSQL_USER'],
        password: process.env['MYSQL_PASSWORD'],
        database: process.env['MYSQL_DATABASE'],
      })
    }),
  })

  const migrator = new Migrator({
    db,
    provider: new FileMigrationProvider({
      fs,
      path,
      // This needs to be an absolute path.
      migrationFolder: path.join(__dirname, 'migrations'),
    }),
  })

  const { error, results } = await migrator.migrateToLatest()

  results?.forEach((it) => {
    if (it.status === 'Success') {
      console.log(`migration "${it.migrationName}" was executed successfully`)
    } else if (it.status === 'Error') {
      console.error(`failed to execute migration "${it.migrationName}"`)
    }
  })

  if (error) {
    console.error('failed to migrate')
    console.error(error)
    process.exit(1)
  }

  await db.destroy()
}

migrateToLatest()