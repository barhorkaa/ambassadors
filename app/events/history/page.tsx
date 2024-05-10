import { EventList } from '@/app/ui/utils/event-list';
import { getEventsWithReports } from '@/database/repository/events';

export default async function EventsHistoryPage() {
  const eventsWithApprovedReports = await getEventsWithReports(true);

  return (
    <div>
      <h1>Historie akcí</h1>
      <hr className="w-full" />
      <EventList title={''} list={eventsWithApprovedReports!} emptyMessage={'V historii nic zatím nemáme'} />
    </div>
  );
}
