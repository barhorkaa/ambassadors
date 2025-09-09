'use client';

import { createMaterialAction, editMaterialAction } from '@/app/lib/actions/material';
import { findErrors, formActionInitialState } from '@/app/lib/actions/utils';
import { FormLayout } from '@/app/ui/utils/component-layouts';
import FormControl, { FormControlEditor } from '@/app/ui/utils/form-control';
import { MaterialManipulationModel } from '@/models/material-models';
import { useFormState } from 'react-dom';

interface MaterialFormProps {
  material?: MaterialManipulationModel;
}

export function MaterialForm({ material }: MaterialFormProps) {
  const [state, dispatch] = useFormState(material ? editMaterialAction : createMaterialAction, formActionInitialState);

  return (
    <FormLayout action={dispatch} state={state} modalId={material ? 'edit' + material.id : 'create_material_modal'}>
      <FormControl
        title={'Název materiálu'}
        id={'name'}
        defaultValue={material?.name}
        errorMessage={findErrors('name', state.errors)[0]}
      />
      <FormControlEditor
        title="Popis materiálu"
        id="description"
        initialContent={material?.description}
        errorMessage={findErrors('description', state.errors)[0]}
      />
      <div className="form-control">
        <input id="id" value={material?.id} type="hidden" name="id" />
      </div>
    </FormLayout>
  );
}
