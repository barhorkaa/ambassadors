'use client';

import { deleteMaterialAction } from '@/app/lib/actions/material';
import { DeleteButton } from '@/app/ui/button/delete-button';
import ModalLayout from '@/app/ui/modals/modal-layout';

export default function DeleteMaterialModal({ materialId }: { materialId: string }) {
  return (
    <ModalLayout id={'delete' + materialId} title={'Opravdu chcete smazat tento materiál?'} modalType={'delete'}>
      <div className="pt-4 flex flex-col gap-4">
        <p>Smazáni materiálu se nedá vrátit.</p>
        <p>
          Tento materiál se již nebude moct použít pro vytvoření zpráv z akce. Stávajíci zprávy, ve kterých se materiál
          vyskytuje ale zůstanou nezměneny.
        </p>
        <div className="flex justify-end">
          <DeleteButton fun={deleteMaterialAction} id={materialId} modalId={'delete' + materialId} />
        </div>
      </div>
    </ModalLayout>
  );
}
