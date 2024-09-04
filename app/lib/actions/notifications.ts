import { handleError } from '@/app/lib/actions/utils';
import { userEditSchema } from '@/models/user-models';
import { revalidatePath } from 'next/cache';

export async function editNotificationsAction(prevState: any, formData: FormData) {
  try {
    const notificationsForm = {
      id: formData.get('id'),
      name: formData.get('name'),
      phone_number: formData.get('phoneNumber'),
      uco: formData.get('uco'),
      email: formData.get('email'),
      role: formData.get('role'),
    };

    const parsedData = userEditSchema.parse(notificationsForm);
    // await editNotifications(parsedData);
  } catch (e) {
    console.error(e);
    return handleError(e);
  }
  revalidatePath('/ambassadors/[id]/page', 'layout');
  return { success: true, errors: [], generic: undefined };
}
