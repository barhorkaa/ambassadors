'use client';

import { deleteEventTypeAction } from '@/app/lib/actions/event-type';
import { DeleteButton } from '@/app/ui/button/delete-button';
import ModalLayout from '@/app/ui/modals/modal-layout';

export default function DeleteEventTypeModal({ eventTypeId }: { eventTypeId: string }) {
  return (
    <ModalLayout id={'delete' + eventTypeId} title={'Opravdu chcete smazat tento typ akce?'} modalType={'delete'}>
      <div className="pt-4 flex flex-col gap-4">
        <p>Smazáni typu akce se nedá vrátit.</p>
        <p>
          Tento druh akce se již nebude moct použít pro vytvoření noých akcí. Stávajíci akce s tímto typem ale zůstanou
          nezměneny.
        </p>
        <div className="flex justify-end">
          <DeleteButton fun={deleteEventTypeAction} id={'delete' + eventTypeId} modalId={eventTypeId} />
        </div>
      </div>
    </ModalLayout>
  );
}
