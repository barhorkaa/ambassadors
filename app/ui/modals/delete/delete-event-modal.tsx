'use client';

import { deleteEventAction } from '@/app/lib/actions/event';
import { ActionModalButton } from '@/app/ui/button/action-modal-button';
import ModalLayout from '@/app/ui/modals/modal-layout';

export default function DeleteEventModal({ eventId }: { eventId: string }) {
  return (
    <ModalLayout id={'delete_event_modal'} title={'Opravdu chcete smazat tuto akci?'} modalType={'delete'}>
      <p>
        Smazáni akce se nedá vrátit. Na akci se již nebude moct nikto přihlásiť a uživatlé aktuálně přihlášení budou
        odhlášení.
      </p>
      <ActionModalButton fun={deleteEventAction} id={eventId} modalId={'delete_event_modal'} />
    </ModalLayout>
  );
}
