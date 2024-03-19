import {db} from "@/database/database";
import {User} from "kysely-codegen";
import {Selectable} from "kysely";

export async function getUserByEmail(email: string): Promise<Selectable<User> | undefined> {
  return await db.selectFrom("user").where("email", "=", email).selectAll().executeTakeFirst();
}

export async function getUserRole(email: string) : Promise<String> {
  try {
    const role = await db.selectFrom('user').where('email', '=', email).select('role').executeTakeFirstOrThrow();
    return role.role;
  } catch (e) {
    throw new Error('Failed to fetch user role:');
  }
}

export async function getUserApproval(email: string | undefined) {
  if (email === undefined) {
    throw new Error('User has no id');
  }
  try {
    return  db.selectFrom('user').where('email','=', email).select('approved').executeTakeFirstOrThrow();
  } catch (e) {

  }
}

export async function createNewUser(name: string, email: string, password: string, uco: number, phone_number: string) {
  console.log("inside createNewUser in repo");
  const newUser = {
    name: name,
    uco: uco,
    email: email,
    phone_number: phone_number,
    password: password,
  }

  // TODO handle undefined when insert fails
  let res = null;
  try {
    res = await db
      .insertInto('user').values(newUser).returning('id').executeTakeFirst()
  } catch (e) {
    console.log(e);
  }

  console.log("inserted into database");
  return(res);
}

export async function setUserMotivatedStatus(id: string) {
  try {
    await db.updateTable("user").set({"motivated": true}).where("id", "=", id).executeTakeFirstOrThrow();
  } catch (e) {
    console.log(e)
  }
}

export async function getAllManagers(): Promise<Selectable<User>[] | undefined> {
  try {
    return db.selectFrom("user").where("role", "=", "manager").selectAll().execute()
  } catch (e) {
    console.log(e)
  }
}

export async function getAllAmbassadors(): Promise<Selectable<User>[] | undefined> {
  try {
    return db.selectFrom("user").where("role", "=", "ambassador").selectAll().execute()
  } catch (e) {
    console.log(e)
  }
}

// TODO implement deduplication function
// export async function getUsersWithRole(role: string): Promise<Selectable<User>[] | undefined> {
//   try {
//     return db.selectFrom("user").where("role", "=", role).selectAll().execute()
//   } catch (e) {
//     console.log(e)
//   }
// }

export async function getNotApprovedUsers(): Promise<Selectable<User>[] | undefined> {
  try {
    return db.selectFrom("user").where("approved", "=", false).selectAll().execute()
  } catch (e) {
    console.log(e)
  }
}

export async function approveUser(id: string) {
  try {
    console.log("got to repository, user id is: ", id)
    await db.updateTable("user").set({approved: true}).where("id", "=", id).executeTakeFirstOrThrow();
  } catch (e) {
    console.log(e)
  }
}
