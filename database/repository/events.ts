import { db } from '@/database/database';
import { DatabaseError } from '@/errors/database-error';
import { EventBasicModel } from '@/models/event/event-basic-model';
import { objectToCamel } from 'ts-case-convert';

export function adapter(
  toAdapt: {
    event_type_id: string;
    date: Date | null;
    name: string;
    event_type_name: string | null;
    id: string;
    limit: string;
  }[]
) {
  const camel = objectToCamel(toAdapt);
  return camel.map((event) => {
    return { ...event, limit: +event.limit };
  });
}

export async function getAllEvents(approved: boolean) {
  try {
    const result = await db
      .selectFrom('event')
      .where('event.approved', '=', approved)
      .leftJoin('eventType', 'eventType.id', 'event_type_id')
      .select([
        'event.name as name',
        'eventType.name as event_type_name',
        'event_type_id',
        'date',
        'event.id as id',
        'event.limit as limit',
      ])
      .execute();
    return adapter(result);
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get all events', cause: e });
  }
}

export async function getEventById(id: string) {
  try {
    return await db.selectFrom('event').where('id', '=', id).selectAll().executeTakeFirstOrThrow();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to event with id', cause: e });
  }
}

export async function createEvent({ event }: { event: EventBasicModel }) {
  try {
    console.log('new event is: ', event);
    await db.insertInto('event').values(event).execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_CREATE_ERROR', message: 'Unable to create a new event', cause: e });
  }
}

export async function updateEvent(event: EventBasicModel) {
  try {
    await db
      .updateTable('event')
      .set({
        date: event.date,
        name: event.name,
        event_type_id: event.event_type_id,
        limit: event.limit,
        updated_at: new Date(),
      })
      .where('id', '=', event.id!)
      .execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_UPDATE_ERROR', message: 'Unable to update an event', cause: e });
  }
}

export async function approveEvent(id: string) {
  try {
    await db
      .updateTable('event')
      .set({ approved: true, updated_at: new Date() })
      .where('id', '=', id)
      .executeTakeFirstOrThrow();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_UPDATE_ERROR', message: 'Unable to approve event', cause: e });
  }
}
