import { db } from '@/database/database';
import { DatabaseError } from '@/database/errors/database-error';
import { adapter } from '@/database/repository/utils/adapter';
import { ITEMS_PER_PAGE } from '@/database/repository/utils/consts';
import { EventManipulationModel } from '@/models/event-models';
import { objectToCamel, objectToSnake } from 'ts-case-convert';

export async function getAllFilteredActiveEvents(
  approved: boolean,
  query: string,
  currentPage: number,
  dateFrom: Date,
  dateTo: Date
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const isCustomDateRange =
    dateFrom.getTime() !== new Date('2000-01-01').getTime() || dateTo.getTime() !== new Date('3000-01-01').getTime();

  try {
    const result = await db
      .selectFrom('event')
      .where('event.approved', '=', approved)
      .where('event.deleted_at', 'is', null)
      .leftJoin('report', 'report.event_id', 'event.id')
      .where('report.id', 'is', null)
      .leftJoin('eventType', 'eventType.id', 'event_type_id')
      .where((eb) => eb.or([eb('event.name', 'ilike', `%${query}%`), eb('eventType.name', 'ilike', `%${query}%`)]))
      .where((eb) => {
        if (isCustomDateRange) {
          return eb.and([eb('event.date', 'is not', null), eb.between('event.date', dateFrom, dateTo)]);
        } else {
          return eb.or([eb('event.date', 'is', null), eb.between('event.date', dateFrom, dateTo)]);
        }
      })
      .select([
        'event.name as name',
        'eventType.name as event_type_name',
        'event_type_id',
        'date',
        'event.id as id',
        'event.limit as limit',
      ])
      .limit(ITEMS_PER_PAGE)
      .offset(offset)
      .execute();
    return adapter(result);
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get filtered events', cause: e });
  }
}

export async function getAllFilteredActiveEventsCount(approved: boolean, query: string, dateFrom: Date, dateTo: Date) {
  const isCustomDateRange =
    dateFrom.getTime() !== new Date('2000-01-01').getTime() || dateTo.getTime() !== new Date('3000-01-01').getTime();

  try {
    const result = await db
      .selectFrom('event')
      .where('event.approved', '=', approved)
      .where('event.deleted_at', 'is', null)
      .leftJoin('report', 'report.event_id', 'event.id')
      .where('report.id', 'is', null)
      .leftJoin('eventType', 'eventType.id', 'event_type_id')
      .where((eb) => eb.or([eb('event.name', 'ilike', `%${query}%`), eb('eventType.name', 'ilike', `%${query}%`)]))
      .where((eb) => {
        if (isCustomDateRange) {
          return eb.and([eb('event.date', 'is not', null), eb.between('event.date', dateFrom, dateTo)]);
        } else {
          return eb.or([eb('event.date', 'is', null), eb.between('event.date', dateFrom, dateTo)]);
        }
      })
      .select('event.id')
      .execute();

    return Math.ceil(result.length / ITEMS_PER_PAGE);
  } catch (e) {
    console.error(e);
    throw new DatabaseError({ name: 'DATABASE_GET_ERROR', message: 'Unable to get filtered events', cause: e });
  }
}

export async function getAllHistoryEvents(
  approved: boolean,
  query: string,
  currentPage: number,
  dateFrom: Date,
  dateTo: Date
) {
  const isCustomDateRange =
    dateFrom.getTime() !== new Date('2000-01-01').getTime() || dateTo.getTime() !== new Date('3000-01-01').getTime();

  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const result = await db
      .selectFrom('report')
      .where('report.approved', '=', approved)
      .leftJoin('event', 'event.id', 'event_id')
      .leftJoin('eventType', 'eventType.id', 'event_type_id')
      .where((eb) => eb.or([eb('event.name', 'ilike', `%${query}%`), eb('eventType.name', 'ilike', `%${query}%`)]))
      .where((eb) => {
        if (isCustomDateRange) {
          return eb.and([eb('event.date', 'is not', null), eb.between('event.date', dateFrom, dateTo)]);
        } else {
          return eb.or([eb('event.date', 'is', null), eb.between('event.date', dateFrom, dateTo)]);
        }
      })
      .select([
        'event.name as name',
        'eventType.name as event_type_name',
        'event_type_id',
        'date',
        'event.id as id',
        'event.limit as limit',
      ])
      .limit(ITEMS_PER_PAGE)
      .offset(offset)
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

export async function getAllHistoryEventsCount(approved: boolean, query: string, dateFrom: Date, dateTo: Date) {
  const isCustomDateRange =
    dateFrom.getTime() !== new Date('2000-01-01').getTime() || dateTo.getTime() !== new Date('3000-01-01').getTime();

  try {
    const result = await db
      .selectFrom('report')
      .where('report.approved', '=', approved)
      .leftJoin('event', 'event.id', 'event_id')
      .leftJoin('eventType', 'eventType.id', 'event_type_id')
      .where((eb) => eb.or([eb('event.name', 'ilike', `%${query}%`), eb('eventType.name', 'ilike', `%${query}%`)]))
      .where((eb) => {
        if (isCustomDateRange) {
          return eb.and([eb('event.date', 'is not', null), eb.between('event.date', dateFrom, dateTo)]);
        } else {
          return eb.or([eb('event.date', 'is', null), eb.between('event.date', dateFrom, dateTo)]);
        }
      })
      .select('event.id')
      .execute();

    return Math.ceil(result.length / ITEMS_PER_PAGE);
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
