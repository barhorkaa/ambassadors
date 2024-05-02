import { editEventTypeAction } from '@/app/lib/actions/event-type';
import { createMaterialAction } from '@/app/lib/actions/material';
import SubmitButton from '@/app/ui/button/submit-button';
import { MaterialCreateModel } from '@/models/material/material-create-model';

export function MaterialForm(params: { material: MaterialCreateModel | null }) {
  return (
    <form action={params.material === null ? createMaterialAction : editEventTypeAction} className="card-body">
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
        <input
          id="description"
          defaultValue={params.material?.description}
          type="text"
          name="description"
          placeholder="Popis akce"
          className="input input-bordered"
          required
        />
      </div>
      {/*<div className="form-control">*/}
      {/*  <input id="id" value={params.material?.id} type="hidden" name="id" className="input input-bordered" />*/}
      {/*</div>*/}
      <SubmitButton title={'Odeslat'} />
    </form>
  );
}
