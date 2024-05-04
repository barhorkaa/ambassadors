import DetailRow from '@/app/ui/utils/detail-row';
import { auth } from '@/auth';
import { EventTypeDetailModel } from '@/models/event-type-models';

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
