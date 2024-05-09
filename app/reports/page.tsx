import { EventList } from '@/app/ui/utils/event-list';
import { getEventsWithUnapprovedReports } from '@/database/repository/report';

export default async function () {
  const eventsWithUnapprovedReports = await getEventsWithUnapprovedReports();
  return (
    <>
      <h1>Zprávy z akcí</h1>
      <EventList
        title={''}
        list={eventsWithUnapprovedReports!}
        emptyMessage={'V tento moment jsou všechny zprávy potvrzeny!'}
      />
    </>
  );
}
