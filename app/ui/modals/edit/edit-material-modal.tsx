'use client';

import { MaterialForm } from '@/app/ui/material/material-form';
import ModalLayout from '@/app/ui/modals/modal-layout';
import { MaterialDetailModel } from '@/models/material-models';

interface EditMaterialModalProps {
  material: MaterialDetailModel;
}

export default function EditMaterialModal({ material }: EditMaterialModalProps) {
  return (
    <ModalLayout id={'edit' + material.id} title={'Upravit informace o materiálu'} modalType={'edit'}>
      <MaterialForm material={material} />
    </ModalLayout>
  );
}
