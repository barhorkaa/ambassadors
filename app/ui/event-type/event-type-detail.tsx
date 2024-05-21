import DeleteEventTypeModal from '@/app/ui/modals/delete/delete-event-type-modal';
import EditEventTypeModal from '@/app/ui/modals/edit/edit-event-type-modal';
import ReviveEventTypeModal from '@/app/ui/modals/revive/revive-event-type-modal';
import DetailRowVertical from '@/app/ui/utils/data-display';
import { UserRoles } from '@/app/utils/user-roles';
import { auth } from '@/auth';
import { EventTypeDetailModel } from '@/models/event-type-models';

export default async function EventTypeDetail({ eventType }: { eventType: EventTypeDetailModel }) {
  const session = await auth();

  return (
    <div className="data-display">
      <div className="card-body">
        <div className="flex flex-row justify-between items-end">
          <h2>{eventType.name}</h2>
          {session?.user.role === UserRoles.manager && (
            <div className="flex gap-2 md:gap-4">
              {eventType.deletedAt === null ? (
                <DeleteEventTypeModal eventTypeId={eventType.id} />
              ) : (
                <ReviveEventTypeModal eventTypeId={eventType.id} />
              )}
              <EditEventTypeModal eventType={eventType} />
            </div>
          )}
        </div>
        <DetailRowVertical label={''} value={eventType.description} />
        <DetailRowVertical label={'Instrukce pro ambasadory'} value={eventType.instructions} />
        {session?.user.role == UserRoles.manager && (
          <div className="flex flex-col md:flex-row md:gap-8">
            <DetailRowVertical label={'Vytvořeno'} value={eventType.createdAt.toLocaleString('cs-CZ')} />
            <DetailRowVertical label={'Upraveno'} value={eventType.updatedAt.toLocaleString('cs-CZ')} />
            <DetailRowVertical
              label={'Zmazáno'}
              value={eventType.deletedAt == null ? 'Ne' : eventType.deletedAt.toLocaleString('cs-CZ')}
            />
          </div>
        )}
      </div>
    </div>
  );
}
