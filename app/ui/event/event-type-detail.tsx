import { DetailRow } from '@/app/ui/user/user-detail';
import { auth } from '@/auth';
import { EventTypeDetailModel } from '@/models/event-type/event-type-detail-model';

export default async function EventTypeDetail({ eventType }: { eventType: EventTypeDetailModel | undefined }) {
  const session = await auth();

  if (eventType === undefined) {
    return <div>Unable to load eventType details</div>;
  }

  return (
    <div className="flex flex-col">
      <DetailRow label={'Typ akce'} value={eventType.name} />
      <DetailRow label={'Popis'} value={eventType.description} />
      <DetailRow label={'Instrukce'} value={eventType.instructions} />
      {session?.user.role == 'manager' && (
        <div>
          <DetailRow label={'Vytvořeno'} value={eventType.created_at.toLocaleString()} />
          <DetailRow label={'Upraveno'} value={eventType.updated_at.toLocaleString()} />
          <DetailRow
            label={'Zmazáno'}
            value={eventType.deleted_at == null ? 'Ne' : eventType.deleted_at.toLocaleString()}
          />
        </div>
      )}
    </div>
  );
}
