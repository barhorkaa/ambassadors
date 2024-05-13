'use client';

import { MaterialForm } from '@/app/ui/material/material-form';
import ModalLayout from '@/app/ui/modals/modal-layout';
import { MaterialDetailModel } from '@/models/material-models';

export default function EditMaterialModal(data: { material: MaterialDetailModel }) {
  return (
    <ModalLayout id={'edit' + data.material.id} title={'Upravit informace o materiálu'} modalType={'edit'}>
      <MaterialForm material={data.material} />
    </ModalLayout>
  );
}
