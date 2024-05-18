import { db } from '@/database/database';
import { DatabaseError } from '@/errors/database-error';
import { EventTypeManipulationModel } from '@/models/event-type-models';
import { objectToCamel } from 'ts-case-convert';

export async function getEventTypeById(id: string) {
  try {
    const result = await db.selectFrom('eventType').where('id', '=', id).selectAll().executeTakeFirstOrThrow();
    if (result) {
      return objectToCamel(result);
    } else {
      return result;
    }
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get event type details', cause: e });
  }
}

export async function getAllEventTypesBasics() {
  try {
    return await db.selectFrom('eventType').where('deleted_at', 'is', null).select(['name', 'id']).execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get event types', cause: e });
  }
}

export async function getAllEventTypes(deleted: boolean) {
  try {
    const result = await db
      .selectFrom('eventType')
      .where('deleted_at', deleted ? 'is not' : 'is', null)
      .selectAll()
      .execute();
    return objectToCamel(result);
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get all event types', cause: e });
  }
}

export async function createEventType(eventType: EventTypeManipulationModel) {
  try {
    await db.insertInto('eventType').values(eventType).execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_CREATE_ERROR', message: 'Unable to create event type', cause: e });
  }
}

export async function editEventType(eventType: EventTypeManipulationModel) {
  try {
    await db
      .updateTable('eventType')
      .where('id', '=', eventType.id!)
      .set({
        name: eventType.name,
        description: eventType.description,
        instructions: eventType.instructions,
        updated_at: new Date(),
      })
      .execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_UPDATE_ERROR', message: 'Unable to edit event type', cause: e });
  }
}

export async function deleteEventType(id: string) {
  try {
    await db.updateTable('eventType').where('id', '=', id).set({ deleted_at: new Date() }).executeTakeFirstOrThrow();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_DELETE_ERROR', message: 'Unable to delete event type', cause: e });
  }
}
