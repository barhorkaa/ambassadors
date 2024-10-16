import GroupEmailDetail from '@/app/ui/event-group-emails/group-email-detail';
import { getEventGroupEmails } from '@/database/repository/event-group-emails';

export default async function Page({ params }: { params: { id: string } }) {
  const eventEmails = await getEventGroupEmails(params.id);

  return (
    <>
      {eventEmails.map((email) => (
        <GroupEmailDetail email={email} />
      ))}
    </>
  );
}
