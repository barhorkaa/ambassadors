import { EventList } from '@/app/ui/utils/event-list';
import { getAllActiveEvents } from '@/database/repository/events';
import { EventModel } from '@/models/event-models';

export default async function allEvents() {
  const allEvents: EventModel[] = await getAllActiveEvents(true);

  return (
    <EventList
      title={'Všechny akce'}
      list={allEvents}
      emptyMessage={'Momentálně nejsou k dispozici žádné akce. Jestli chcete někam jet, vtvořte návrh na novou akci.'}
    />
  );
}
