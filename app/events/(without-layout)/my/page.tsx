import { SectionInfo } from '@/app/ui/utils/data-display';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await auth();
  if (!session) {
    redirect('/login');
  }

  return (
    <>
      <SectionInfo title={'Moje přihlášeni'} contents={[]} />
    </>
  );
}
