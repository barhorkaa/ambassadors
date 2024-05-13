import { EventList } from '@/app/ui/utils/event-list';
import { getAllActiveEvents } from '@/database/repository/events';
import { EventModel } from '@/models/event-models';
import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default async function Events() {
  const allEvents: EventModel[] = await getAllActiveEvents(true);
  const allUnapprovedEvents: EventModel[] = await getAllActiveEvents(false);

  return (
    <>
      <div className="flex flex-row justify-between">
        <h1>Akce</h1>
        <Link className="btn" href={'/events/new'}>
          <PlusIcon className="h-5" />
          <p className="hidden md:block">Přidat akci</p>
        </Link>
      </div>
      <hr className="w-full" />
      <EventList title={'Nepotvrzené akce'} list={allUnapprovedEvents} emptyMessage={'Všechny akce jsou potvrzeny'} />
      <EventList
        title={'Všechny akce'}
        list={allEvents}
        emptyMessage={'Momentálně nejsou k dispozici žádné akce. Jestli chcete někam jet, vtvořte návrh na novou akci.'}
      />
    </>
  );
}
