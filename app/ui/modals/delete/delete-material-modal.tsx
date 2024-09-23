'use client';

import { deleteMaterialAction } from '@/app/lib/actions/material';
import { ActionModalButton } from '@/app/ui/button/action-modal-button';
import ModalLayout from '@/app/ui/modals/modal-layout';

interface DeleteMaterialModalProps {
  materialId: string;
}

export default function DeleteMaterialModal({ materialId }: DeleteMaterialModalProps) {
  return (
    <ModalLayout id={'delete' + materialId} title={'Opravdu chcete smazat tento materiál?'} modalType={'delete'}>
      <div className="pt-4 flex flex-col gap-4">
        <p>
          Tento materiál se již nebude moct použít pro vytvoření zpráv z akce. Stávajíci zprávy, ve kterých se materiál
          vyskytuje ale zůstanou nezměneny.
        </p>
        <p>Smazaný materiál se dá později obnovit.</p>
        <div className="flex justify-end">
          <ActionModalButton fun={deleteMaterialAction} id={materialId} modalId={'delete' + materialId} />
        </div>
      </div>
    </ModalLayout>
  );
}
