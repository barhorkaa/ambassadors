import { db } from '@/database/database';
import { DatabaseError } from '@/database/errors/database-error';
import { EventGroupEmailModel } from '@/models/event-group-emails-models';
import { objectToSnake } from 'ts-case-convert';

export async function createEventGroupEmail(groupEmail: EventGroupEmailModel) {
  try {
    return await db
      .insertInto('eventGroupEmails')
      .values(objectToSnake(groupEmail))
      .returning('id')
      .executeTakeFirstOrThrow();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_CREATE_ERROR', message: 'Unable to create a new group email', cause: e });
  }
}

export async function getEventGroupEmails(eventId: string) {
  try {
    await db
      .selectFrom('eventGroupEmails')
      .where('event_id', '=', eventId)
      .select(['id', 'created_at as createdAt', 'event_id as eventId', 'contents'])
      .execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({
      name: 'DATABASE_GET_ERROR',
      message: 'Unable to get group emails for this event',
      cause: e,
    });
  }
}
