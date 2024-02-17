import {db} from "@/database/database";
import {User} from "kysely-codegen";
import {Selectable} from "kysely";

export async function getUserByEmail(email: string): Promise<Selectable<User> | undefined> {
  return await db.selectFrom("user").where("email", "=", email).selectAll().executeTakeFirst();
}