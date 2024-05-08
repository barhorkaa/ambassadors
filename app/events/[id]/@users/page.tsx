import EventSignUpButton from '@/app/ui/button/event-sign-up-button';
import { EventUserDetail } from '@/app/ui/event-user/event-user-detail';
import { auth } from '@/auth';
import { userSignUpForEventStatus } from '@/database/repository/event-user';
import { getEventById } from '@/database/repository/events';
import { EventDetailModel } from '@/models/event-models';

export default async function UsersPage({ params }: { params: { id: string } }) {
  const session = await auth();
  const event: EventDetailModel = await getEventById(params.id);
  const userStatus = await userSignUpForEventStatus(event.id, session?.user.id!);

  return (
    <div className="card rounded-none shadow-md">
      <div className="card-body">
        <div className="flex flex-row justify-between items-end">
          <h2 className="card-title font-light text-sm">Přihlášení na akci</h2>
          {session && (
            <fieldset disabled={!event.approved}>
              <EventSignUpButton
                isSignedOnEvent={userStatus !== undefined}
                event_id={event.id}
                user_id={session.user.id}
              />
            </fieldset>
          )}
        </div>

        <EventUserDetail event_id={params.id} />
      </div>
    </div>
  );
}
