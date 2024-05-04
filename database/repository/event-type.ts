import { db } from '@/database/database';
import { DatabaseError } from '@/errors/database-error';
import { EventTypeDefaultModel } from '@/models/event-type-models';
import { EventTypeCreateModel } from '@/models/event-type/event-type-create-model';

export async function getEventTypeById(id: string) {
  try {
    return await db.selectFrom('eventType').where('id', '=', id).selectAll().executeTakeFirst();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get event type details', cause: e });
  }
}

export async function getAllEventTypesBasics() {
  try {
    return await db.selectFrom('eventType').select(['name', 'id']).execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get event types', cause: e });
  }
}

export async function getAllEventTypes() {
  try {
    return await db.selectFrom('eventType').selectAll().execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get all event types', cause: e });
  }
}

export async function createEventType(eventType: EventTypeCreateModel) {
  try {
    await db.insertInto('eventType').values(eventType).execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_CREATE_ERROR', message: 'Unable to create event type', cause: e });
  }
}

export async function editEventType(eventType: EventTypeDefaultModel) {
  try {
    await db
      .updateTable('eventType')
      .where('id', '=', eventType.id)
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
