import { createEventTypeAction, editEventTypeAction } from '@/app/lib/actions/event-type';
import SubmitButton from '@/app/ui/button/submit-button';
import { EventTypeDetailModel } from '@/models/event-type-models';

export function EventTypeForm(params: { eventType: EventTypeDetailModel | null }) {
  return (
    <form action={params.eventType === null ? createEventTypeAction : editEventTypeAction} className="card-body">
      <div className="form-control">
        <label className="label" htmlFor="email">
          <span className="label-text">Název typu akce</span>
        </label>
        <input
          id="name"
          defaultValue={params.eventType?.name}
          type="text"
          name="name"
          placeholder="Název typu akce"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="password">
          <span className="label-text">Popis akce</span>
        </label>
        <input
          id="description"
          defaultValue={params.eventType?.description}
          type="text"
          name="description"
          placeholder="Popis akce"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="password">
          <span className="label-text">Instrukce pro ambasadory</span>
        </label>
        <input
          id="instructions"
          defaultValue={params.eventType?.instructions}
          type="text"
          name="instructions"
          placeholder="Instrukce pro ambasadory"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <input id="id" value={params.eventType?.id} type="hidden" name="id" className="input input-bordered" />
      </div>
      <SubmitButton
        title={'Odeslat'}
        modalId={params.eventType === null ? 'create_event_type_modal' : params.eventType.id}
      />
    </form>
  );
}
