import { createMaterialAction, editMaterialAction } from '@/app/lib/actions/material';
import SubmitButton from '@/app/ui/button/submit-button';
import FormControl from '@/app/ui/utils/form-control';
import { MaterialManipulationModel } from '@/models/material-models';

export function MaterialForm({ material }: { material: MaterialManipulationModel | null }) {
  return (
    <form action={material === null ? createMaterialAction : editMaterialAction} className="card-body">
      <FormControl title={'Název materiálu'} id={'name'} defaultValue={material?.name} />
      <FormControl
        title={'Popis materiálu'}
        id={'description'}
        defaultValue={material?.description}
        inputType={'area'}
      />
      <div className="form-control">
        <input id="id" value={material?.id} type="hidden" name="id" />
      </div>
      <SubmitButton title={'Odeslat'} modalId={material === null ? 'create_material_modal' : 'edit' + material.id} />
    </form>
  );
}
