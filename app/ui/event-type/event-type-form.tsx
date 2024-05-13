import { createEventTypeAction, editEventTypeAction } from '@/app/lib/actions/event-type';
import SubmitButton from '@/app/ui/button/submit-button';
import FormControl from '@/app/ui/utils/form-control';
import { EventTypeDetailModel } from '@/models/event-type-models';

export function EventTypeForm({ eventType }: { eventType: EventTypeDetailModel | null }) {
  return (
    <form action={eventType === null ? createEventTypeAction : editEventTypeAction} className="card-body">
      <FormControl title={'Název typu akce'} id={'name'} defaultValue={eventType?.name} />
      <FormControl
        title={'Popis typu akce'}
        id={'description'}
        inputType={'area'}
        defaultValue={eventType?.description}
      />
      <FormControl
        title={'Popis typu akce'}
        id={'instructions'}
        inputType={'area'}
        defaultValue={eventType?.instructions}
      />
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
