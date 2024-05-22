# AmbassadorsFIMU
### Bachelor's thesis
#### Author: Barbora Horňáková

This application has been created as a bachelor's thesis at the Faculty of Informatics of Masaryk University.

## Running the System Locally

### Installing Dependencies

Firstly, it is necessary to install all the dependencies with

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Setting Up Environment Variables

In order to be able to connect to the database there need to correct environment variables set.

'.env.local.example' contains example of the environment variables. Rename this file to '.env.local' so the container can get to them.

This file also contains the 'AUTH_SECRET' variable. This variable is needed for the Auth.js authentication to run.

To generate a more secure secret run the following command and pass the value to the variable:

```bash
openssl rand -base64 32
```

Next there is the '.env.example' file, this file contains the database URL for subsequent steps to work. Rename the file to '.env' and adjust the URl if you had changed anything regarding in the '.env.local' file regarding the database variables.

### Running the Container

This project contains a docker-compose.yml file that will run the Docker container. Simply run the following command and the database should be ready for connections in a bit.

```bash
docker compose up
```

### Running the Migrations

In order for the containerized database to contain tables, we need to run migrations. These will create the database schemas.

Run the following command to execute migrations.

```bash
npx tsx database/runMigration.ts
```
If the migration was successful the terminal should print out the list of migrations that were executed successfully.  

### Generating Types

For the application to function properly we need to generate types for the Kysely tables with the command:

```bash
kysely-codegen 
```

### Seeding the Database

For the application to function there needs to be at least one user with the manager role. In order for the user to appear in the database
we need to run the following command:

```bash
node scripts/seed.js
```

This will seed the database with an initial manager user and the application can be run.

### Running the Application 

Before running the application locally in production mode we first need to build it with:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```
After a successful build run the following command to run the application:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

Now open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If done correctly, the application should now be running, and you should be able to try it in local environment. 

[//]: # (generated content after creating the project with `create-next-app`)
## Learn More About Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
