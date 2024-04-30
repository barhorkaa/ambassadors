import { db } from '@/database/database';
import { DatabaseError } from '@/errors/database-error';
import { RegistrationModel } from '@/models/auth/registration-model';
import { UserEditFullModel } from '@/models/user/user-edit-full-model';
import { UserEditSelfModel } from '@/models/user/user-edit-self-model';
import { Selectable } from 'kysely';
import { User } from 'kysely-codegen';

export async function getUserByEmail(email: string): Promise<Selectable<User> | undefined> {
  try {
    return await db.selectFrom('user').where('email', '=', email).selectAll().executeTakeFirst();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Failed to get user with this email', cause: e });
  }
}

export async function getUserById(id: string): Promise<Selectable<User> | undefined> {
  try {
    return await db.selectFrom('user').where('id', '=', id).selectAll().executeTakeFirstOrThrow();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Failed to get user with this ID', cause: e });
  }
}

export async function createUser(newUser: RegistrationModel) {
  try {
    console.log('got to repository');
    console.log('new user on repo is: ', newUser);

    await db.insertInto('user').values(newUser).returning('id').executeTakeFirst();
    console.log('sucessfully created user');
    return true;
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_CREATE_ERROR', message: 'Unable to create User', cause: e });
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
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_UPDATE_ERROR', message: 'Could not update user, partial', cause: e });
  }
}

export async function editFullUser(user: UserEditFullModel) {
  try {
    await db
      .updateTable('user')
      .where('id', '=', user.id)
      .set({
        name: user.name,
        phone_number: user.phone_number,
        uco: user.uco,
        email: user.email,
        updated_at: new Date(),
      })
      .execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_UPDATE_ERROR', message: 'Could not update user, full', cause: e });
  }
}

export async function motivateUser(id: string) {
  try {
    await db.updateTable('user').set({ motivated: true }).where('id', '=', id).executeTakeFirstOrThrow();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_UPDATE_ERROR', message: 'Could not motivate user', cause: e });
  }
}

export async function getAllManagers(): Promise<Selectable<User>[]> {
  try {
    return db.selectFrom('user').where('role', '=', 'manager').selectAll().execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Could not get all managers', cause: e });
  }
}

export async function getAllAmbassadors(): Promise<Selectable<User>[]> {
  try {
    return db.selectFrom('user').where('role', '=', 'ambassador').selectAll().execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Could not get all ambassadors', cause: e });
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

export async function getNotApprovedUsers(): Promise<Selectable<User>[]> {
  try {
    return db.selectFrom('user').where('approved', '=', false).selectAll().execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Could not get unapproved ambassadors', cause: e });
  }
}

export async function approveUser(id: string) {
  try {
    console.log('got to repository, user id is: ', id);
    await db.updateTable('user').set({ approved: true }).where('id', '=', id).executeTakeFirstOrThrow();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_UPDATE_ERROR', message: 'Could not approve user', cause: e });
  }
}
