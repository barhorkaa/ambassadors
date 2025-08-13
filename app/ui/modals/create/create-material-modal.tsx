'use client';

import { MaterialForm } from '@/app/ui/material/material-form';
import ModalLayout from '@/app/ui/modals/modal-layout';

export default function CreateMaterialModal() {
  return (
    <ModalLayout id={'create_material_modal'} title={'Nový materiál'} modalType={'create'} wider={true}>
      <MaterialForm material={null} />
    </ModalLayout>
  );
}
