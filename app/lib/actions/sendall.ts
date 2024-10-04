'use server';

import {
  emailEventChange,
  emailHello,
  emailManagerDemotionAction,
  emailManagerNewRegistrationAction,
  emailManagerNewReportAction,
  emailManagerNewSignupAction,
  emailManagerNewSuggestionAction,
  emailManagerPromotionAction,
  emailNewEventAction,
  emailPersonalInfoChangeAction,
  emailRegistrationApprove,
  emailResetPassword,
  emailSignupApprove,
  emailSignupPromotionAction,
  emailVerifyEmail,
} from '@/app/lib/actions/nodemailer';
import { getEventById } from '@/database/repository/event';
import { getUserById } from '@/database/repository/user';

export async function sendAll() {
  try {
    const userId = '05b09a2a-c2f5-4d89-ba8d-69aca7bc0969';
    const user = await getUserById(userId);

    const eventId = '7cf150b6-fa61-40b4-8a82-ddc98e67d2ed';
    const event = await getEventById(eventId);

    const eventWithReportId = '5d6d818e-5a74-4cca-92c8-449579259ff0';

    await emailVerifyEmail(userId);
    await emailNewEventAction(eventId);
    await emailRegistrationApprove(userId);
    await emailSignupApprove(userId, eventId, false);
    await emailSignupPromotionAction(userId, eventId);
    await emailEventChange(event, eventId);
    await emailPersonalInfoChangeAction(user);

    await emailManagerNewSuggestionAction(eventId);
    await emailManagerNewRegistrationAction(userId);
    await emailManagerNewReportAction(eventWithReportId);
    await emailManagerNewSignupAction(eventId, userId, false);
    await emailManagerPromotionAction(userId);
    await emailManagerDemotionAction(userId);

    await emailResetPassword(userId, '');
    await emailHello(userId);
  } catch (e) {
    console.log(e);
  }
}
