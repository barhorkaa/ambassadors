'use client';

import { reviveMaterialAction } from '@/app/lib/actions/material';
import { DeleteButton } from '@/app/ui/button/delete-button';
import ModalLayout from '@/app/ui/modals/modal-layout';

export default function ReviveMaterialModal({ materialId }: { materialId: string }) {
  return (
    <ModalLayout id={'revive' + materialId} title={'Opravdu chcete obnovit tento materiál?'} modalType={'revive'}>
      <div className="pt-4 flex flex-col gap-4">
        <p>Obnovením tohoto materiálu bude moct materiál být opět používan v zprávach z výjezdů.</p>
        <p>Bude taktéž viditelný pro všechny uživatele aplikace.</p>
        <div className="flex justify-end">
          <DeleteButton fun={reviveMaterialAction} id={materialId} modalId={'revive' + materialId} />
        </div>
      </div>
    </ModalLayout>
  );
}
