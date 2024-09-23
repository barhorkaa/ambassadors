'use client';

import { reviveEventTypeAction } from '@/app/lib/actions/event-type';
import { ActionModalButton } from '@/app/ui/button/action-modal-button';
import ModalLayout from '@/app/ui/modals/modal-layout';

interface ReviveEventTypeModalProps {
  eventTypeId: string;
}

export default function ReviveEventTypeModal({ eventTypeId }: ReviveEventTypeModalProps) {
  return (
    <ModalLayout id={'revive' + eventTypeId} title={'Opravdu chcete obnovit tento materiál?'} modalType={'revive'}>
      <div className="pt-4 flex flex-col gap-4">
        <p>
          Obnovením tohoto druhu akce bude moct být opět používan při vytváření nových akcí a úpravě již existujících.
        </p>
        <p>Bude taktéž viditelný pro všechny uživatele aplikace.</p>
        <div className="flex justify-end">
          <ActionModalButton fun={reviveEventTypeAction} id={eventTypeId} modalId={'revive' + eventTypeId} />
        </div>
      </div>
    </ModalLayout>
  );
}
