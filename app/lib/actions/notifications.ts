'use server';

import { handleError } from '@/app/lib/actions/utils';
import { editManagerNotifications, editNotifications } from '@/database/repository/notifications';
import { revalidatePath } from 'next/cache';

export async function editNotificationsAction(prevState: any, formData: FormData) {
  try {
    const notificationsForm = {
      userId: formData.get('userId') as string,
      registrationApprove: formData.get('registrationApprove') === 'on',
      signupApprove: formData.get('signupApprove') === 'on',
      personalInfoChange: formData.get('personalInfoChange') === 'on',
      eventChange: formData.get('eventChange') === 'on',
      newEvent: formData.get('newEvent') === 'on',
    };

    await editNotifications(notificationsForm);

    if (formData.get('isManager') === 'yes') {
      const managerNotificationsForm = {
        userId: formData.get('userId') as string,
        newEventSuggestion: formData.get('newEventSuggestion') === 'on',
        newRegistration: formData.get('newRegistration') === 'on',
        newReport: formData.get('newReport') === 'on',
        newSignup: formData.get('newSignup') === 'on',
      };

      console.log('notifications form is: ');
      console.log(managerNotificationsForm);

      await editManagerNotifications(managerNotificationsForm);
    }
  } catch (e) {
    console.error(e);
    return handleError(e);
  }
  revalidatePath('/ambassadors/[id]/page', 'layout');
  return { success: true, errors: [], generic: undefined };
}
