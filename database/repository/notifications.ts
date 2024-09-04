import { db } from '@/database/database';
import { DatabaseError } from '@/database/errors/database-error';
import { objectToCamel } from 'ts-case-convert';

export async function getUserNotifications(userId: string) {
  try {
    const result = await db
      .selectFrom('notifications')
      .where('user_id', '=', userId)
      .selectAll()
      .executeTakeFirstOrThrow();
    if (result) {
      return objectToCamel(result);
    } else {
      return result;
    }
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get user notifications', cause: e });
  }
}

export async function getUserNotificationsManager(userId: string) {
  try {
    const result = await db
      .selectFrom('notifications_manager')
      .where('user_id', '=', userId)
      .selectAll()
      .executeTakeFirst();
    if (result) {
      return objectToCamel(result);
    } else {
      return result;
    }
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get user notifications', cause: e });
  }
}
