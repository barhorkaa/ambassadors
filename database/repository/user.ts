import { UserRoles } from '@/app/utils/user-roles';
import { db } from '@/database/database';
import { DatabaseError } from '@/database/errors/database-error';
import {
  createManagerNotifications,
  createNotifications,
  deleteManagerNotifications,
} from '@/database/repository/notifications';
import { ITEMS_PER_PAGE } from '@/database/repository/utils/consts';
import { UserCreateModel, UserEditModel } from '@/models/user-models';

export async function getUserByEmail(email: string) {
  try {
    return await db.selectFrom('user').where('email', '=', email).selectAll().executeTakeFirst();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({
      name: 'DATABASE_GET_ERROR',
      message: 'Failed to get user with this email',
      cause: e,
    });
  }
}

export async function getUserById(id: string) {
  try {
    return await db.selectFrom('user').where('id', '=', id).selectAll().executeTakeFirstOrThrow();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Failed to get user with this ID', cause: e });
  }
}

export async function createUser(newUser: UserCreateModel) {
  try {
    const id = await db.insertInto('user').values(newUser).returning('id').executeTakeFirstOrThrow();
    await createNotifications(id.id);
    return id.id;
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_CREATE_ERROR', message: 'Unable to create User', cause: e });
  }
}

export async function editUserPassword(id: string, newPassword: string) {
  try {
    await db
      .updateTable('user')
      .where('id', '=', id)
      .set({ password: newPassword, updated_at: new Date() })
      .executeTakeFirstOrThrow();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_UPDATE_ERROR', message: 'Unable to change user password', cause: e });
  }
}

export async function editUser(user: UserEditModel) {
  try {
    const oldUser = getUserById(user.id);
    await db
      .updateTable('user')
      .where('id', '=', user.id)
      .set({ name: user.name, phone_number: user.phone_number, updated_at: new Date() })
      .execute();
    return oldUser;
  } catch (e) {
    console.error(e);
    throw new DatabaseError({
      name: 'DATABASE_UPDATE_ERROR',
      message: 'Could not update user, partial',
      cause: e,
    });
  }
}

export async function editFullUser(user: UserEditModel) {
  try {
    const oldUser = getUserById(user.id);

    const userFormerRole = await db
      .selectFrom('user')
      .where('id', '=', user.id)
      .select('role')
      .executeTakeFirstOrThrow();

    await db
      .updateTable('user')
      .where('id', '=', user.id)
      .set({
        name: user.name,
        phone_number: user.phone_number,
        uco: user.uco,
        email: user.email,
        role: user.role,
        updated_at: new Date(),
      })
      .execute();

    if (userFormerRole.role != user.role) {
      if (userFormerRole.role === UserRoles.manager) {
        await deleteManagerNotifications(user.id);
      }
      if (user.role === UserRoles.manager) {
        await createManagerNotifications(user.id);
      }
    }
    return oldUser;
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

export async function getAllManagers() {
  try {
    return db.selectFrom('user').where('role', '=', 'manager').selectAll().execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Could not get all managers', cause: e });
  }
}

export async function getAllAmbassadors(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    return db
      .selectFrom('user')
      .where('role', '=', 'ambassador')
      .where((eb) =>
        eb.or([
          eb('name', 'ilike', `%${query}%`),
          eb('email', 'ilike', `%${query}%`),
          eb((a) => a.cast('uco', 'text'), 'ilike', `%${query}%`),
        ])
      )
      .selectAll()
      .limit(ITEMS_PER_PAGE)
      .offset(offset)
      .execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Could not get all ambassadors', cause: e });
  }
}

export async function getAllAmbassadorsCount(query: string) {
  try {
    const result = await db
      .selectFrom('user')
      .where('role', '=', 'ambassador')
      .where((eb) =>
        eb.or([
          eb('name', 'ilike', `%${query}%`),
          eb('email', 'ilike', `%${query}%`),
          eb((a) => a.cast('uco', 'text'), 'ilike', `%${query}%`),
        ])
      )
      .selectAll()
      .execute();

    return Math.ceil(result.length / ITEMS_PER_PAGE);
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Could not get all ambassadors', cause: e });
  }
}

export async function getNotApprovedUsers() {
  try {
    return db.selectFrom('user').where('approved', '=', false).selectAll().execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({
      name: 'DATABASE_GET_ERROR',
      message: 'Could not get unapproved ambassadors',
      cause: e,
    });
  }
}

export async function approveUser(id: string) {
  try {
    await db.updateTable('user').set({ approved: true }).where('id', '=', id).executeTakeFirstOrThrow();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_UPDATE_ERROR', message: 'Could not approve user', cause: e });
  }
}
