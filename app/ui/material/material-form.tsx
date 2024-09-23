'use client';

import { createMaterialAction, editMaterialAction } from '@/app/lib/actions/material';
import { findErrors, formActionInitialState } from '@/app/lib/actions/utils';
import { FormLayout } from '@/app/ui/utils/component-layouts';
import FormControl from '@/app/ui/utils/form-control';
import { MaterialManipulationModel } from '@/models/material-models';
import { useFormState } from 'react-dom';

interface MaterialFormProps {
  material: MaterialManipulationModel | null;
}

export function MaterialForm({ material }: MaterialFormProps) {
  const [state, dispatch] = useFormState(
    material === null ? createMaterialAction : editMaterialAction,
    formActionInitialState
  );

  return (
    <FormLayout
      action={dispatch}
      state={state}
      modalId={material === null ? 'create_material_modal' : 'edit' + material.id}
    >
      <FormControl
        title={'Název materiálu'}
        id={'name'}
        defaultValue={material?.name}
        errorMessage={findErrors('name', state.errors)[0]}
      />
      <FormControl
        title={'Popis materiálu'}
        id={'description'}
        defaultValue={material?.description}
        inputType={'textarea'}
        errorMessage={findErrors('description', state.errors)[0]}
      />
      <div className="form-control">
        <input id="id" value={material?.id} type="hidden" name="id" />
      </div>
    </FormLayout>
  );
}
