import RichHtml from '@/app/ui/utils/html-parser';
import { UserRoles } from '@/app/utils/user-roles';
import { auth } from '@/auth';
import { getEventById } from '@/database/repository/event';
import { getEventTypeById } from '@/database/repository/event-type';
import { EventDetailModel } from '@/models/event-models';
import { EventTypeDetailModel } from '@/models/event-type-models';
import { redirect } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const session = await auth();
  if (!session) {
    redirect('/login');
  }

  const event: EventDetailModel = await getEventById(params.id);
  if (event.deletedAt !== null && session.user.role !== UserRoles.manager) {
    redirect('/denied/role');
  }

  const eventType: EventTypeDetailModel = await getEventTypeById(event.eventTypeId);

  return (
    <div className="data-display">
      <div className="card-body">
        <h2 className="card-title font-light text-sm">Typ akce</h2>
        <h3 className="text-xl">{eventType.name}</h3>
        <>
          <p className="text-sm font-light">Instrukce</p>
          <RichHtml html={eventType.instructions} />
        </>
      </div>
    </div>
  );
}
