import DetailRow from '@/app/ui/utils/detail-row';
import { auth } from '@/auth';
import { EventTypeDetailModel } from '@/models/event-type/event-type-detail-model';

export default async function EventTypeDetail({ eventType }: { eventType: EventTypeDetailModel | undefined }) {
  const session = await auth();

  if (eventType === undefined) {
    return <p className="text-lg">Nepodařilo se získat infomace o typu akce</p>;
  }

  return (
    <div>
      <DetailRow label={'Typ akce'} value={eventType.name} />
      <DetailRow label={'Popis akce'} value={eventType.description} />
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
