import { getSignUpsForEvent, getSubstitutesForEvent } from '@/database/repository/event-user';
import { UserIcon } from '@heroicons/react/24/outline';

export async function EventUserDetail({ event_id }: { event_id: string }) {
  let signedUpForEvent = await getSignUpsForEvent(event_id);
  console.log('these users are signed for this event', signedUpForEvent);
  if (signedUpForEvent === undefined) {
    return <div>Na akci není přhlášen nikto</div>;
  }

  let substitutesForEvent = await getSubstitutesForEvent(event_id);
  console.log('these users are substitutes for this event', substitutesForEvent);
  if (substitutesForEvent === undefined) {
    return <div>Na akci není přhlášen žádný náhradník</div>;
  }

  return (
    <div className="flex flex-col md:flex-row md:gap-16">
      <div>
        <h2>
          Na akci {signedUpForEvent.length > 1 ? 'jsou' : 'je'} přihlášen{signedUpForEvent.length > 1 ? 'i' : ''}
        </h2>
        {signedUpForEvent.map((user, iterator) => (
          <div key={iterator} className="flex flex-row gap-4 pl-16 py-2">
            <UserIcon className="h-6" />
            <p className="text-lg">{user.user_name}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>
          Náhradní{signedUpForEvent.length > 1 ? 'ci' : 'k'}
          {substitutesForEvent.map((user, iterator) => (
            <div key={iterator} className="flex flex-row gap-4 pl-16 py-2">
              <UserIcon className="h-6" />
              <p className="text-lg">{user.user_name}</p>
            </div>
          ))}
        </h2>
      </div>
    </div>
  );
}
