import { EventList } from '@/app/ui/utils/content-list';
import { getAllHistoryEvents } from '@/database/repository/events';

export default async function Page() {
  const eventsWithApprovedReports = await getAllHistoryEvents(true);

  return (
    <div>
      <h1 className="content">Historie akcí</h1>
      <hr className="w-full" />
      <div className="content">
        <EventList title={''} list={eventsWithApprovedReports!} emptyMessage={'V historii nic zatím nemáme'} />
      </div>
    </div>
  );
}
