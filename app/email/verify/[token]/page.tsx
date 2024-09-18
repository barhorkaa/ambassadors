import { verifyEmailAction } from '@/app/lib/actions/verification';
import { HeroCenterLayout } from '@/app/ui/utils/component-layouts';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Page({ params }: { params: { token: string } }) {
  const success = await verifyEmailAction(params.token);

  const session = await auth();
  if (session) redirect('/');

  return (
    <>
      {success ? (
        <HeroCenterLayout title={'E-mail potvrzen'} buttonTitle={'Přihlásit se'} url={'/login'}>
          <p className="py-6">
            Váš email byl potvrzen. Nyní se můžete přihlásit do aplikace a postoupit na další krok.
          </p>
        </HeroCenterLayout>
      ) : (
        <HeroCenterLayout title={'Potvrzuji e-mail'}>
          <p className="py-6">Čekáme na potvrzení e-mailu...</p>
        </HeroCenterLayout>
      )}
    </>
  );
}
