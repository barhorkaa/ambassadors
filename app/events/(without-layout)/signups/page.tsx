import EventUserTable from '@/app/ui/event-user/event-user-table';
import { getAllSignUps } from '@/database/repository/event-user';
import { EventUserBasicModel } from '@/models/event-user-models';

export default async function EventSignUps() {
  const allUnapprovedSignUps: EventUserBasicModel[] = await getAllSignUps(false);
  const allSignUps: EventUserBasicModel[] = await getAllSignUps(true);

  return (
    <>
      <h1 className="content">Přihlášení na akce</h1>
      <hr className="w-full" />
      <div className="content">
        <SignUpList title={'Nepotvrzená přihlášení'} list={allUnapprovedSignUps} />
        <hr />
        <SignUpList title={'Všechna aktuání přihlášení'} list={allSignUps} />
      </div>
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
