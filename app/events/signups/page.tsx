import EventUserTable from '@/app/ui/event-user/event-user-table';
import { getAllSignUps, getAllUnapprovedSignUps } from '@/database/repository/event-user';
import { EventUserBasicModel } from '@/models/event-user/event-user-basic-model';

export default async function EventSignUps() {
  const allUnapprovedSignUps: EventUserBasicModel[] = await getAllUnapprovedSignUps();
  const allSignUps: EventUserBasicModel[] = await getAllSignUps();

  console.log('all sign ups are: ', allUnapprovedSignUps);
  return (
    <>
      <h1>Přihlášení na akce</h1>
      <hr className="w-full" />
      <div>
        <h2>Nepotvrzená přihlášení</h2>
        <EventUserTable eventUsers={allUnapprovedSignUps} />
      </div>
      <hr />
      <div>
        <h2>Všechna aktuání přihlášení</h2>
        <EventUserTable eventUsers={allSignUps} />
      </div>
    </>
  );
}
