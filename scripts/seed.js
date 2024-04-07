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

    // await seedUsers(db)
    await seedEvents(db)
    // await seedEventTypes(db)
}

async function seedEvents(db) {
    const events = [
        {
            name: "Výjezd na Gympabu",
            event_type_id: "21e13253-1f8d-48b5-95ea-0284d21125ac",
            // date: "1710408352",
            approved: true
        },
        {
            name: "DOD 1",
            event_type_id: "f89c4126-c4b2-4d6b-b155-1ab1c19b2955",
            // date: "1710408352",
            approved: false
        }
    ]

    await db
        .insertInto('event').values(events).execute()
}

async function seedEventTypes(db) {
    const eventTypes = [
        {
            name: "Výjezd na školu",
            instructions: "napište nám a dohodneme se",
            description: "pojedete na školu a uděláte prezentaci"
        },
        {
            name: "Den otevřených dveří",
            instructions: "vidíme se na fakultě",
            description: "sprevadzat, moderovat, vitat"
        }
    ]

    await db
        .insertInto('eventType').values(eventTypes).execute()
}

async function seedUsers(db) {
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
