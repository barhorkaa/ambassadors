import { EventList } from '@/app/ui/utils/event-list';
import { getAllHistoryEvents } from '@/database/repository/events';

export default async function Page() {
  const eventsWithUnapprovedReports = await getAllHistoryEvents(false);
  return (
    <>
      <h1>Zprávy z akcí</h1>
      <hr className="w-full" />
      <EventList
        title={''}
        list={eventsWithUnapprovedReports!}
        emptyMessage={'V tento moment jsou všechny zprávy potvrzeny!'}
      />
    </>
  );
}
