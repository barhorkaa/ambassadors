import { db } from '@/database/database';
import { RegistrationModel } from '@/models/auth/registration-model';
import { UserEditSelfModel } from '@/models/user/user-edit-self-model';
import { Selectable } from 'kysely';
import { User } from 'kysely-codegen';

export async function getUserByEmail(email: string): Promise<Selectable<User> | undefined> {
  return await db.selectFrom('user').where('email', '=', email).selectAll().executeTakeFirst();
}

export async function getUserById(id: string): Promise<Selectable<User> | undefined> {
  try {
    return await db.selectFrom('user').where('id', '=', id).selectAll().executeTakeFirstOrThrow();
  } catch (e) {
    console.log(e);
  }
}

export async function getUserRole(email: string): Promise<String> {
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
    return db.selectFrom('user').where('email', '=', email).select('approved').executeTakeFirstOrThrow();
  } catch (e) {}
}

export async function createUser(newUser: RegistrationModel) {
  try {
    console.log('got to repository');
    console.log('new user on repo is: ', newUser);

    await db.insertInto('user').values(newUser).returning('id').executeTakeFirst();
    console.log('sucessfully created user');
    return true;
  } catch (e) {
    console.log(e);
  }
}

export async function editUser(user: UserEditSelfModel) {
  try {
    await db
      .updateTable('user')
      .where('id', '=', user.id)
      .set({ name: user.name, phone_number: user.phone_number, updated_at: new Date() })
      .execute();
  } catch (e) {
    console.log(e);
  }
}

export async function motivateUser(id: string) {
  try {
    await db.updateTable('user').set({ motivated: true }).where('id', '=', id).executeTakeFirstOrThrow();
  } catch (e) {
    console.log(e);
  }
}

export async function getAllManagers(): Promise<Selectable<User>[] | undefined> {
  try {
    return db.selectFrom('user').where('role', '=', 'manager').selectAll().execute();
  } catch (e) {
    console.log(e);
  }
}

export async function getAllAmbassadors(): Promise<Selectable<User>[] | undefined> {
  try {
    return db.selectFrom('user').where('role', '=', 'ambassador').selectAll().execute();
  } catch (e) {
    console.log(e);
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
    return db.selectFrom('user').where('approved', '=', false).selectAll().execute();
  } catch (e) {
    console.log(e);
  }
}

export async function approveUser(id: string) {
  try {
    console.log('got to repository, user id is: ', id);
    await db.updateTable('user').set({ approved: true }).where('id', '=', id).executeTakeFirstOrThrow();
  } catch (e) {
    console.log(e);
  }
}
