import GroupEmailDetail from '@/app/ui/event-group-emails/group-email-detail';
import { getEventGroupEmails } from '@/database/repository/event-group-emails';
import { EventGroupEmailModel } from '@/models/event-group-emails-models';

export default async function Page({ params }: { params: { id: string } }) {
  const eventEmails: EventGroupEmailModel[] = await getEventGroupEmails(params.id);

  return (
    <>
      {eventEmails.map((email, index) => (
        <GroupEmailDetail key={index} email={email} />
      ))}
    </>
  );
}
