import EventSignUpButton from '@/app/ui/button/event-sign-up-button';
import { EventUserDetail } from '@/app/ui/event-user/event-user-detail';
import CreateGroupEmailModal from '@/app/ui/modals/create/create-group-email-modal';
import { UserRoles } from '@/app/utils/user-roles';
import { auth } from '@/auth';
import { getEventById } from '@/database/repository/event';
import { userSignUpForEventStatus } from '@/database/repository/event-user';
import { EventDetailModel } from '@/models/event-models';

export default async function Page({ params }: { params: { id: string } }) {
  const session = await auth();
  const event: EventDetailModel = await getEventById(params.id);
  const userStatus = await userSignUpForEventStatus(event.id, session?.user.id!);

  return (
    <div className="data-display">
      <div className="card-body">
        <div className="flex flex-row justify-between items-end">
          <h2 className="card-title font-light text-sm">Přihlášení na akci</h2>
          {session && event.deletedAt === null && (event.date === null || event.date >= new Date()) && (
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
        {session?.user.role === UserRoles.manager && <CreateGroupEmailModal eventId={params.id} />}
      </div>
    </div>
  );
}
