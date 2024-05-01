import EventUserTable from '@/app/ui/event-user/event-user-table';
import { getAllSignUps, getAllUnapprovedSignUps } from '@/database/repository/event-user';
import { EventUserBasicModel } from '@/models/event-user/event-user-basic-model';

export default async function EventSignUps() {
  const allUnapprovedSignUps: EventUserBasicModel[] = await getAllUnapprovedSignUps();
  const allSignUps: EventUserBasicModel[] = await getAllSignUps();

  return (
    <>
      <h1>Přihlášení na akce</h1>
      <hr className="w-full" />
      <SignUpList title={'Nepotvrzená přihlášení'} list={allUnapprovedSignUps} />
      <hr />
      <SignUpList title={'Všechna aktuání přihlášení'} list={allSignUps} />
    </>
  );
}

function SignUpList(props: { title: string; list: EventUserBasicModel[] }) {
  return (
    <div>
      <h2>{props.title}</h2>
      <EventUserTable eventUsers={props.list} />
    </div>
  );
}
