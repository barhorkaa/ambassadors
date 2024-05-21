import { signOutAction } from '@/app/lib/actions/authentication';
import { HeroCenterLayout } from '@/app/ui/utils/component-layouts';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await auth();
  if (!session) {
    redirect('/');
  }

  return (
    <HeroCenterLayout title={'Váš motivační dotazník byl úspešně zaslán!'}>
      <p className="py-6">Nyní se odhlaste aby se změny projevili. Po přihlášení uvidíte v aplikaci další kroky.</p>
      <form action={signOutAction}>
        <button className="btn">Odhlásit se</button>
      </form>
    </HeroCenterLayout>
  );
}
