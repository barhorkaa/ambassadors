import DeleteEventTypeModal from '@/app/ui/modals/delete/delete-event-type-modal';
import EditEventTypeModal from '@/app/ui/modals/edit/edit-event-type-modal';
import DetailRow from '@/app/ui/utils/detail-row';
import { auth } from '@/auth';
import { EventTypeDetailModel } from '@/models/event-type-models';

export default async function EventTypeDetail({ eventType }: { eventType: EventTypeDetailModel | undefined }) {
  const session = await auth();

  if (eventType === undefined) {
    return <p className="text-lg">Nepodařilo se získat infomace o typu akce</p>;
  }

  return (
    <div className="data-display card-body">
      <div className="flex flex-row justify-between">
        <h2>{eventType.name}</h2>
        {session?.user.role === 'manager' && (
          <div className="flex gap-4">
            <DeleteEventTypeModal eventTypeId={eventType.id} />
            <EditEventTypeModal eventType={eventType} />
          </div>
        )}
      </div>
      <div>
        <DetailRow label={''} value={eventType.description} />
        <DetailRow label={'Instrukce'} value={eventType.instructions} />
      </div>
      {session?.user.role == 'manager' && (
        <div>
          <DetailRow label={'Vytvořeno'} value={eventType.createdAt.toLocaleString()} />
          <DetailRow label={'Upraveno'} value={eventType.updatedAt.toLocaleString()} />
          <DetailRow
            label={'Zmazáno'}
            value={eventType.deletedAt == null ? 'Ne' : eventType.deletedAt.toLocaleString()}
          />
        </div>
      )}
    </div>
  );
}
