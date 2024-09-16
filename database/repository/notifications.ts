import { UserRoles } from '@/app/utils/user-roles';
import { db } from '@/database/database';
import { DatabaseError } from '@/database/errors/database-error';
import { ManagerNotifications, UserNotifications } from '@/models/notifications-models';
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

export async function createNotifications(userId: string) {
  try {
    await db.insertInto('notifications').values({ user_id: userId }).execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({
      name: 'DATABASE_CREATE_ERROR',
      message: 'Unable to create notifications for user',
      cause: e,
    });
  }
}

export async function createManagerNotifications(userId: string) {
  try {
    await db.insertInto('notifications_manager').values({ user_id: userId }).execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({
      name: 'DATABASE_CREATE_ERROR',
      message: 'Unable to create notifications for manager',
      cause: e,
    });
  }
}

export async function editNotifications(notifications: UserNotifications) {
  try {
    await db
      .updateTable('notifications')
      .where('user_id', '=', notifications.userId)
      .set({
        event_change: notifications.eventChange,
        new_event: notifications.newEvent,
        registration_approve: notifications.registrationApprove,
        signup_approve: notifications.signupApprove,
        personal_info_change: notifications.personalInfoChange,
      })
      .execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({
      name: 'DATABASE_UPDATE_ERROR',
      message: 'Could not update user notifications',
      cause: e,
    });
  }
}
export async function editManagerNotifications(notifications: ManagerNotifications) {
  try {
    await db
      .updateTable('notifications_manager')
      .where('user_id', '=', notifications.userId)
      .set({
        new_event_suggestion: notifications.newEventSuggestion,
        new_registration: notifications.newRegistration,
        new_report: notifications.newReport,
        new_signup: notifications.newSignup,
      })
      .execute();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({
      name: 'DATABASE_UPDATE_ERROR',
      message: 'Could not update manager notifications',
      cause: e,
    });
  }
}

export async function deleteManagerNotifications(userId: string) {
  try {
    await db.deleteFrom('notifications_manager').where('user_id', '=', userId).executeTakeFirstOrThrow();
  } catch (e) {
    console.error(e);
    throw new DatabaseError({
      name: 'DATABASE_DELETE_ERROR',
      message: 'Could not delete manager notifications',
      cause: e,
    });
  }
}

type NotificationName =
  | 'registration_approve'
  | 'signup_approve'
  | 'personal_info_change'
  | 'event_change'
  | 'new_event';

export async function getRecipients(notification: NotificationName) {
  try {
    const emails = await db
      .selectFrom('notifications')
      .where(notification, '=', true)
      .innerJoin('user', 'user.id', 'user_id')
      .select('user.email')
      .execute();
    return emails.map((bla) => {
      return bla.email;
    });
  } catch (e) {
    console.error(e);
    throw new DatabaseError({
      name: 'DATABASE_GET_ERROR',
      message: 'Could not get recipients of ' + notification + ' notifications',
      cause: e,
    });
  }
}

type ManagerNotificationName = 'new_event_suggestion' | 'new_registration' | 'new_report' | 'new_signup';

export async function getManagerRecipients(notification: ManagerNotificationName) {
  try {
    const emails = await db
      .selectFrom('notifications_manager')
      .where(notification, '=', true)
      .innerJoin('user', 'user.id', 'user_id')
      .select('user.email')
      .execute();
    return emails.map((bla) => {
      return bla.email;
    });
  } catch (e) {
    console.error(e);
    throw new DatabaseError({
      name: 'DATABASE_GET_ERROR',
      message: 'Could not get recipients of ' + notification + ' notifications',
      cause: e,
    });
  }
}

export async function getRecipientsForEventChange(eventId: string) {
  try {
    // const userEmails = await db
    //   .selectFrom('eventUser')
    //   .where('event_id', '=', eventId)
    //   .innerJoin('notifications', 'notifications.user_id', 'eventUser.user_id')
    //   .where('event_change', '=', true)
    //   .innerJoin('user', 'user.id', 'notifications.user_id')
    //   .select('email')
    //   .execute();
    //
    // const managers = await db
    //   .selectFrom('user')
    //   .where('role', '=', UserRoles.manager)
    //   .innerJoin('notifications', 'user_id', 'user.id')
    //   .select('email')
    //   .execute();

    // TODO check if produces valid output
    const emails = await db
      .selectFrom('user')
      .select('email')
      .innerJoin('notifications', 'notifications.user_id', 'user.id')
      .leftJoin('eventUser', 'eventUser.user_id', 'user.id') // Left join with eventUser
      .where((eb) =>
        eb.or([
          // First condition: Event users with event_change = true and specific event_id
          eb.and([
            eb('eventUser.event_id', '=', eventId), // Event-specific condition
            eb('notifications.event_change', '=', true), // Check event_change flag
          ]),
          // Second condition: Users with the role of manager
          eb('user.role', '=', UserRoles.manager),
        ])
      )
      .execute();

    return emails.map((email) => {
      return email.email;
    });
  } catch (e) {
    console.error(e);
    throw new DatabaseError({
      name: 'DATABASE_GET_ERROR',
      message: 'Could not get recipients of event change notifications',
      cause: e,
    });
  }
}
