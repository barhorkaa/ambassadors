'use client';

import { deleteEventTypeAction } from '@/app/lib/actions/event-type';
import { ActionModalButton } from '@/app/ui/button/action-modal-button';
import ModalLayout from '@/app/ui/modals/modal-layout';

interface DeleteEventTypeModalProps {
  eventTypeId: string;
}

export default function DeleteEventTypeModal({ eventTypeId }: DeleteEventTypeModalProps) {
  return (
    <ModalLayout id={'delete' + eventTypeId} title={'Opravdu chcete smazat tento typ akce?'} modalType={'delete'}>
      <div className="pt-4 flex flex-col gap-4">
        <p>
          Tento druh akce se již nebude moct použít pro vytvoření noých akcí. Stávajíci akce s tímto typem ale zůstanou
          nezměneny.
        </p>
        <p>Smazaný typ akce se dá později obnovit.</p>
        <div className="flex justify-end">
          <ActionModalButton fun={deleteEventTypeAction} id={eventTypeId} modalId={'delete' + eventTypeId} />
        </div>
      </div>
    </ModalLayout>
  );
}
