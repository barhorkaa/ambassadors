import {User} from "kysely-codegen";
import {db} from "@/database/database";
import {Selectable} from "kysely";

export async function GetUserByEmail(email: string) : Promise<Selectable<User> | undefined> {
  try {
    return await db.selectFrom('user').where('email', '=', email).selectAll().executeTakeFirstOrThrow();
  } catch (error) {
    console.log('Failed to fetch user:', error);
    throw new Error('Failed to fetch user:');
  }
}

export async function GetUserRole(email: string) : Promise<String> {
  try {
    const role = await db.selectFrom('user').where('email', '=', email).select('type').executeTakeFirstOrThrow();
    return role.type;
  } catch (e) {
    throw new Error('Failed to fetch user role:');
  }
}