import { db } from '@/database/database';
import { DatabaseError } from '@/database/errors/database-error';
import { EventManipulationModel } from '@/models/event-models';
import { objectToCamel, objectToSnake } from 'ts-case-convert';

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

export async function getAllActiveEvents(approved: boolean) {
  try {
    const result = await db
      .selectFrom('event')
      .where('event.approved', '=', approved)
      .where('event.deleted_at', 'is', null)
      .leftJoin('report', 'report.event_id', 'event.id')
      .where('report.id', 'is', null)
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

export async function getAllHistoryEvents(approved: boolean) {
  try {
    const result = await db
      .selectFrom('report')
      .where('report.approved', '=', approved)
      .leftJoin('event', 'event.id', 'event_id')
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
    const resultNoNull = result.map((event) => {
      return {
        id: event.id!,
        name: event.name!,
        event_type_id: event.event_type_id!,
        date: event.date!,
        limit: event.limit!,
        event_type_name: event.event_type_name!,
      };
    });
    return adapter(resultNoNull);
  } catch (e) {
    console.error(e);
  }
}

export async function getEventById(id: string) {
  try {
    const result = await db.selectFrom('event').where('id', '=', id).selectAll().executeTakeFirstOrThrow();
    const event = objectToCamel(result);
    return { ...event, limit: +event.limit };
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to event with id', cause: e });
  }
}

export async function createEvent(event: EventManipulationModel) {
  try {
    return await db.insertInto('event').values(objectToSnake(event)).returning('id').executeTakeFirstOrThrow();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_CREATE_ERROR', message: 'Unable to create a new event', cause: e });
  }
}

export async function updateEvent(event: EventManipulationModel) {
  try {
    const oldEvent = await getEventById(event.id!);

    await db
      .updateTable('event')
      .set({
        date: event.date,
        name: event.name,
        event_type_id: event.eventTypeId,
        limit: event.limit,
        updated_at: new Date(),
      })
      .where('id', '=', event.id!)
      .execute();
    return oldEvent;
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

export async function deleteEvent(id: string) {
  try {
    await db.updateTable('event').where('id', '=', id).set({ deleted_at: new Date() }).executeTakeFirstOrThrow();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_DELETE_ERROR', message: 'Unable to delete event', cause: e });
  }
}
