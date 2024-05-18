import { auth } from '@/auth';
import Link from 'next/link';
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
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="hero-title">Váš účet ješte nebyl potvrzen</h1>
          <p className="py-6">
            K této části aplikace nemáte přistup jelikož váš účet ješte nebyl potvrzen zaměstnancem OVVSP.
          </p>
          <p className="pb-6">
            Zkuste se vrátit později. Kdyby váš účet i po týdnu nebyl potvrzen, napište email na propagace@fi.muni.cz{' '}
          </p>
          <Link href={'/'} className="btn">
            Zpátky na úvodní stránku
          </Link>
        </div>
      </div>
    </div>
  );
}
