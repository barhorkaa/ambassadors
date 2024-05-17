import EventForm from '@/app/ui/event/event-form';
import { getAllEventTypesBasics } from '@/database/repository/event-type';
import { EventTypeMinModel } from '@/models/event-type-models';

export default async function NewEvent() {
  const eventTypes: EventTypeMinModel[] = await getAllEventTypesBasics();

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left p-4">
          <h1>Podejte návrh na novou akci</h1>
          <p className="py-6">
            Tento návrh pak zkontroluje jeden z našich manažerů a pokud bude všetko v pořádku, budete se moci na nšj
            přihlásit v rubrice &quot;Akce&quot;
          </p>
        </div>
        <div className="card">
          <EventForm event={null} eventTypes={eventTypes} />
        </div>
      </div>
    </div>
  );
}