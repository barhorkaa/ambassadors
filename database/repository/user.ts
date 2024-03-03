import {db} from "@/database/database";
import {User} from "kysely-codegen";
import {Selectable} from "kysely";

export async function getUserByEmail(email: string): Promise<Selectable<User> | undefined> {
  return await db.selectFrom("user").where("email", "=", email).selectAll().executeTakeFirst();
}

export async function getUserRole(email: string) : Promise<String> {
  try {
    const role = await db.selectFrom('user').where('email', '=', email).select('type').executeTakeFirstOrThrow();
    return role.type;
  } catch (e) {
    throw new Error('Failed to fetch user role:');
  }
}

export async function getUser() {

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
