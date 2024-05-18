import { SignUpList } from '@/app/ui/utils/content-list';
import { getAllSignUps } from '@/database/repository/event-user';
import { EventUserBasicModel } from '@/models/event-user-models';

export default async function Page() {
  const allSignUps: EventUserBasicModel[] = await getAllSignUps(true);

  return <SignUpList title={'Všechna aktuání přihlášení'} list={allSignUps} />;
}
