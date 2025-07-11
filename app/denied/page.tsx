import { HeroCenterLayout } from '@/app/ui/utils/component-layouts';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await auth();
  if (!session) {
    redirect('/');
  }

  if (session.user.approved) {
    redirect('/events');
  }

  return (
    <HeroCenterLayout title={'Váš účet ješte nebyl potvrzen'} url={'/'} buttonTitle={'Zpátky na úvodní stránku'}>
      <p className="py-6">
        K této části aplikace nemáte přistup jelikož váš účet ješte nebyl potvrzen zaměstnancem OVVSP.
      </p>
      <p className="pb-6">
        Zkuste se vrátit později. Kdyby váš účet i po týdnu nebyl potvrzen, napište email na{' '}
        <a href="mailto:propagace@fi.muni.cz">propagace@fi.muni.cz</a>
      </p>
    </HeroCenterLayout>
  );
}
