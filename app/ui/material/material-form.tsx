import { createMaterialAction, editMaterialAction } from '@/app/lib/actions/material';
import SubmitButton from '@/app/ui/button/submit-button';
import { MaterialManipulationModel } from '@/models/material-models';

export function MaterialForm(params: { material: MaterialManipulationModel | null }) {
  return (
    <form action={params.material === null ? createMaterialAction : editMaterialAction} className="card-body">
      <div className="form-control">
        <label className="label" htmlFor="email">
          <span className="label-text">Název materiálu</span>
        </label>
        <input
          id="name"
          defaultValue={params.material?.name}
          type="text"
          name="name"
          placeholder="Název typu akce"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="password">
          <span className="label-text">Popis materiálu</span>
        </label>
        <textarea
          id="description"
          defaultValue={params.material?.description}
          name="description"
          placeholder="Popis akce"
          required
        />
      </div>
      <div className="form-control">
        <input id="id" value={params.material?.id} type="hidden" name="id" className="input input-bordered" />
      </div>
      <SubmitButton
        title={'Odeslat'}
        modalId={params.material === null ? 'create_material_modal' : 'edit' + params.material.id}
      />
    </form>
  );
}
