import { SignUpList } from '@/app/ui/utils/content-list';
import { getAllSignUps } from '@/database/repository/event-user';
import { EventUserBasicModel } from '@/models/event-user-models';

export default async function Page() {
  const allUnapprovedSignUps: EventUserBasicModel[] = await getAllSignUps(false);

  return (
    <SignUpList
      title={'Nepotvrzená přihlášení'}
      list={allUnapprovedSignUps}
      emptyMessage={'V součastné době nejsou v aplikaci žádné přihlášení na akce, které nejsou potvrzeny.'}
    />
  );
}
