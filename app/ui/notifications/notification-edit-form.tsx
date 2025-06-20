'use client';

import { editNotificationsAction } from '@/app/lib/actions/notifications';
import { formActionInitialState } from '@/app/lib/actions/utils';
import { FormLayout } from '@/app/ui/utils/component-layouts';
import { ToggleButton } from '@/app/ui/utils/toggle-button';
import { ManagerNotifications, UserNotifications } from '@/models/notifications-models';
import { useFormState } from 'react-dom';

interface NotificationEditFormProps {
  notifications: UserNotifications;
  managerNotifications: ManagerNotifications | undefined;
}

export default function NotificationsEditForm({ notifications, managerNotifications }: NotificationEditFormProps) {
  const [state, dispatch] = useFormState(editNotificationsAction, formActionInitialState);

  return (
    <FormLayout action={dispatch} state={state} modalId={'notifications' + notifications.userId}>
      {managerNotifications && <ManagerNotificationsSettings managerNotifications={managerNotifications} />}
      <UserNotificationsSettings userNotifications={notifications} />
      <input id="userId" type="hidden" name="userId" value={notifications.userId} required />
      <input
        id="isManager"
        type="hidden"
        name="isManager"
        value={managerNotifications !== undefined ? 'yes' : 'no'}
        required
      />
    </FormLayout>
  );
}

function ManagerNotificationsSettings({ managerNotifications }: { managerNotifications: ManagerNotifications }) {
  return (
    <>
      <ToggleButton
        defaultState={managerNotifications.newEventSuggestion}
        title={'Nový návrh akce'}
        detail={'Nový návrh na akci, který je třeba potvrdit'}
        id={'newEventSuggestion'}
        name={'newEventSuggestion'}
      />
      <ToggleButton
        defaultState={managerNotifications.newRegistration}
        title={'Nová registrace'}
        detail={'Registrace nových uživatelů je potřeba potvrdit'}
        id={'newRegistration'}
        name={'newRegistration'}
      />
      <ToggleButton
        defaultState={managerNotifications.newSignup}
        title={'Nové přihlášení na akci'}
        detail={'Ambasador se přihlásí na nějakou akci'}
        id={'newSignup'}
        name={'newSignup'}
      />
      <ToggleButton
        defaultState={managerNotifications.newReport}
        title={'Nová zpráva z akce'}
        detail={'Po skončení akce a podaní zprávy'}
        id={'newReport'}
        name={'newReport'}
      />
      <hr />
    </>
  );
}

function UserNotificationsSettings({ userNotifications }: { userNotifications: UserNotifications }) {
  return (
    <>
      <ToggleButton
        defaultState={userNotifications.eventChange}
        title={'Změna akce'}
        detail={'Když se něco změní na akci, na kterou jdete'}
        id={'eventChange'}
        name={'eventChange'}
      />
      <ToggleButton
        defaultState={userNotifications.newEvent}
        title={'Nová akce'}
        detail={'Když přibyde nová akce, na kterou se můžete přihlásit'}
        id={'newEvent'}
        name={'newEvent'}
      />
      <ToggleButton
        defaultState={userNotifications.personalInfoChange}
        title={'Změna osobních údajů'}
        detail={'Při změne někým jiným, než vámi'}
        id={'personalInfoChange'}
        name={'personalInfoChange'}
      />
      <ToggleButton
        defaultState={userNotifications.signupApprove}
        title={'Potvrzení přihlášení na akci'}
        id={'signupApprove'}
        name={'signupApprove'}
      />
    </>
  );
}
