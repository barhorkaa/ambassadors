import { getSignUpsForEvent, getSubstitutesForEvent } from '@/database/repository/event-user';
import { UserIcon } from '@heroicons/react/24/outline';

export async function EventUserDetail({ event_id }: { event_id: string }) {
  let signedUpForEvent = await getSignUpsForEvent(event_id);
  let substitutesForEvent = await getSubstitutesForEvent(event_id);

  return (
    <div className="flex flex-col">
      <div>
        <h3 className="card-title">Přihlášení</h3>
        {signedUpForEvent.length !== 0 ? (
          <div>
            {signedUpForEvent.map((user, iterator) => (
              <div key={iterator} className="flex flex-row gap-4 pl-8 py-2">
                <UserIcon className="h-6" />
                <p className="text-lg">{user.user_name}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>Na akci není přihlášen nikto</div>
        )}
      </div>
      <div>
        {/*<h3 className="card-title">Záskok</h3>*/}
        {substitutesForEvent.length !== 0 ? (
          <div>
            <h3 className="card-title">Záskok</h3>

            {substitutesForEvent.map((user, iterator) => (
              <div key={iterator} className="flex flex-row gap-4 pl-16 py-2">
                <UserIcon className="h-6" />
                <p className="text-lg">{user.user_name}</p>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
