import GroupEmailDetail from '@/app/ui/event-group-emails/group-email-detail';
import { getEventGroupEmails } from '@/database/repository/event-group-emails';
import { EventGroupEmailModel } from '@/models/event-group-emails-models';

export default async function Page({ params }: { params: { id: string } }) {
  const eventEmails: EventGroupEmailModel[] = await getEventGroupEmails(params.id);

  if (eventEmails.length > 0)
    return (
      <>
        {eventEmails.map((email, index) => (
          <div key={index}>
            <GroupEmailDetail email={email} />
            <hr className="w-full" />
          </div>
        ))}
      </>
    );
  else
    return (
      <div className="data-display p-4">
        <p>K této akci zatím nejsou žádené dodatečné informace.</p>
      </div>
    );
}
