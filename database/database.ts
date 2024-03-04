import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely'

import * as dotenv from 'dotenv'
import {DB} from "kysely-codegen";
dotenv.config({ path: '.env.local' })

const dialect = new PostgresDialect({
  pool: new Pool({
    host: process.env['POSTGRES_HOST'],
    port: +process.env['POSTGRES_PORT']!,
    user: process.env['POSTGRES_USER'],
    password: process.env['POSTGRES_PASSWORD'],
    database: process.env['POSTGRES_DB'],
    max: 10,
  })
})

// Database interface is passed to Kysely's constructor, and from now on, Kysely
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how
// to communicate with your database.
export const db = new Kysely<DB>({
  dialect,
})