import EventForm from '@/app/ui/event/event-form';
import { CardSkeleton } from '@/app/ui/utils/skeletons';
import { getAllEventTypesBasics } from '@/database/repository/event-type';
import { EventTypeMinModel } from '@/models/event-type-models';
import { Suspense } from 'react';

export default async function Page() {
  const eventTypes: EventTypeMinModel[] = await getAllEventTypesBasics();

  return (
    <Suspense fallback={<CardSkeleton />}>
      <div className="card">
        <EventForm event={null} eventTypes={eventTypes} />
      </div>
    </Suspense>
  );
}
