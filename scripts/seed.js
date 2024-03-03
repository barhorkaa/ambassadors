const {Kysely, PostgresDialect} = require("kysely");
const bcrypt = require("bcryptjs");
const {Pool} = require("pg");

require('dotenv').config({ path: '.env.local' })

async function main() {
    const dialect = new PostgresDialect({
        pool: new Pool({
            host: process.env['POSTGRES_HOST'],
            port: +process.env['POSTGRES_PORT'],
            user: process.env['POSTGRES_USER'],
            password: process.env['POSTGRES_PASSWORD'],
            database: process.env['POSTGRES_DB'],
        })
    });
    const db = new Kysely({
        dialect: dialect,
    });

    const users = [
        {
            name: "John Smith",
            uco: 222222,
            email: "js@js.com",
            phone_number: "+444444444444",
            password: await bcrypt.hash("123456", 10),
            role: "manager",
            approved: true
        },{
            name: "Agatha Christie",
            uco: 111111,
            email: "ac@ac.com",
            phone_number: "+123456789",
            password: await bcrypt.hash("123456", 10),
            role: "ambassador",
            approved: true
        }
    ]

    await db
        .insertInto('user').values(users).execute()
}


main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});
