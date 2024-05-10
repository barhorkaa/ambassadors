import { EventList } from '@/app/ui/utils/event-list';
import { getEventsWithReports } from '@/database/repository/events';

export default async function Page() {
  const eventsWithUnapprovedReports = await getEventsWithReports(false);
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
