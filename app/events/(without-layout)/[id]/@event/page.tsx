import EventDetail from '@/app/ui/event/event-detail';
import { getEventById } from '@/database/repository/events';
import { EventDetailModel } from '@/models/event-models';

export default async function Page({ params }: { params: { id: string } }) {
  const event: EventDetailModel = await getEventById(params.id);

  return (
    <div>
      <div className="data-display">
        <div className="card-body">
          <EventDetail event={event} />
        </div>
      </div>
    </div>
  );
}
