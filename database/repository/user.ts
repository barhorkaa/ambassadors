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