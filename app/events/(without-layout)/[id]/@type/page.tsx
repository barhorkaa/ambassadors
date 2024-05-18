import { getEventTypeById } from '@/database/repository/event-type';
import { getEventById } from '@/database/repository/events';
import { EventDetailModel } from '@/models/event-models';
import { EventTypeDetailModel } from '@/models/event-type-models';

export default async function Page({ params }: { params: { id: string } }) {
  const event: EventDetailModel = await getEventById(params.id);
  const eventType: EventTypeDetailModel = await getEventTypeById(event.eventTypeId);

  return (
    <div className="data-display">
      <div className="card-body">
        <h2 className="card-title font-light text-sm">Typ akce</h2>
        <h3 className="text-xl">{eventType.name}</h3>
        <div>
          <p className="text-sm font-light">Instrukce</p>
          <p className="text-lg">{eventType.instructions}</p>
        </div>
      </div>
    </div>
  );
}
