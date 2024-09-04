'use client';

import { editNotificationsAction } from '@/app/lib/actions/notifications';
import { formActionInitialState } from '@/app/lib/actions/utils';
import { FormLayout } from '@/app/ui/utils/component-layouts';
import { ToggleButton } from '@/app/ui/utils/toggle-button';
import { ManagerNotifications, UserNotifications } from '@/models/notifications-models';
import { useFormState } from 'react-dom';

export default function NotificationsEditForm({
  notifications,
  managerNotifications,
}: {
  notifications: UserNotifications;
  managerNotifications: ManagerNotifications | undefined;
}) {
  const [state, dispatch] = useFormState(editNotificationsAction, formActionInitialState);

  return (
    <FormLayout action={dispatch} state={state} modalId={'notifications' + notifications.userId}>
      {managerNotifications && <ManagerNotifications managerNotifications={managerNotifications} />}
      <UserNotifications userNotifications={notifications} />
      <input id="id" type="hidden" name="id" value={notifications.userId} required />
    </FormLayout>
  );
}

function ManagerNotifications({ managerNotifications }: { managerNotifications: ManagerNotifications }) {
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

function UserNotifications({ userNotifications }: { userNotifications: UserNotifications }) {
  return (
    <>
      <ToggleButton
        defaultState={userNotifications.eventApprove}
        title={'Potvzení návrhu na akci'}
        detail={'Když byl váš podaný návrh schválen'}
        id={'eventApprove'}
        name={'eventApprove'}
      />
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
        defaultState={userNotifications.registrationApprove}
        title={'Potvrzení registrace'}
        id={'registrationApprove'}
        name={'registrationApprove'}
      />
      <ToggleButton
        defaultState={userNotifications.reportApprove}
        title={'Potvrzení podané zprávy'}
        id={'reportApprove'}
        name={'reportApprove'}
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
