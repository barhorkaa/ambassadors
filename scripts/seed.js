const {MysqlDialect, Kysely} = require("kysely");
const {createPool} = require("mysql2");
const bcrypt = require("bcryptjs");

require('dotenv').config({ path: '.env.local' })

async function main() {
    const dialect = new MysqlDialect({
        pool: createPool({
            host: process.env['MYSQL_HOST'],
            port: +process.env['MYSQL_PORT'],
            user: process.env['MYSQL_USER'],
            password: process.env['MYSQL_PASSWORD'],
            database: process.env['MYSQL_DATABASE'],
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
        }
    ]

    await db
        .insertInto('user').values(users[0]).execute()
}


main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});