import { createMaterialAction, editMaterialAction } from '@/app/lib/actions/material';
import SubmitButton from '@/app/ui/button/submit-button';
import FormControl from '@/app/ui/utils/form-control';
import { MaterialManipulationModel } from '@/models/material-models';

export function MaterialForm(params: { material: MaterialManipulationModel | null }) {
  return (
    <form action={params.material === null ? createMaterialAction : editMaterialAction} className="card-body">
      <FormControl
        title={'Název materiálu'}
        id={'name'}
        type={'text'}
        defaultValue={params.material?.name}
        inputType={'input'}
      />
      <FormControl
        title={'Popis materiálu'}
        id={'description'}
        type={''}
        defaultValue={params.material?.description}
        inputType={'area'}
      />
      <div className="form-control">
        <input id="id" value={params.material?.id} type="hidden" name="id" />
      </div>
      <SubmitButton
        title={'Odeslat'}
        modalId={params.material === null ? 'create_material_modal' : 'edit' + params.material.id}
      />
    </form>
  );
}
