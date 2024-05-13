import { createEventTypeAction, editEventTypeAction } from '@/app/lib/actions/event-type';
import SubmitButton from '@/app/ui/button/submit-button';
import { EventTypeDetailModel } from '@/models/event-type-models';

export function EventTypeForm({ eventType }: { eventType: EventTypeDetailModel | null }) {
  return (
    <form action={eventType === null ? createEventTypeAction : editEventTypeAction} className="card-body">
      <div className="form-control">
        <label className="label" htmlFor="email">
          <span className="label-text">Název typu akce</span>
        </label>
        <input
          id="name"
          defaultValue={eventType?.name}
          type="text"
          name="name"
          placeholder="Název typu akce"
          required
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="password">
          <span className="label-text">Popis akce</span>
        </label>
        <textarea
          id="description"
          defaultValue={eventType?.description}
          name="description"
          placeholder="Popis akce"
          required
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="password">
          <span className="label-text">Instrukce pro ambasadory</span>
        </label>
        <textarea
          id="instructions"
          defaultValue={eventType?.instructions}
          name="instructions"
          placeholder="Instrukce pro ambasadory"
          required
        />
      </div>
      <div className="form-control">
        <input id="id" value={eventType?.id} type="hidden" name="id" />
      </div>
      <SubmitButton
        title={'Odeslat'}
        modalId={eventType === null ? 'create_event_type_modal' : 'edit' + eventType.id}
      />
    </form>
  );
}
