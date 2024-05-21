import { db } from '@/database/database';
import { motivateUser } from '@/database/repository/user';
import { DatabaseError } from '@/errors/database-error';
import { MotivationModel } from '@/models/motivation-models';
import { objectToCamel, objectToSnake } from 'ts-case-convert';

export async function createMotivation(motivation: MotivationModel) {
  try {
    await db.insertInto('motivationForm').values(objectToSnake(motivation)).execute();
    await motivateUser(motivation.userId);
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_CREATE_ERROR', message: 'Unable to create motivation', cause: e });
  }
}

export async function getUserMotivation(id: string) {
  try {
    const result = await db.selectFrom('motivationForm').where('user_id', '=', id).selectAll().executeTakeFirst();
    if (result) {
      return objectToCamel(result);
    } else {
      return result;
    }
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get user motivation', cause: e });
  }
}
