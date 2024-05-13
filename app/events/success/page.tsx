import { auth } from '@/auth';
import Link from 'next/link';

export default async function EventSuccess() {
  const session = await auth();

  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="hero-title py-6">Akce byla úspěšně vytvořena!</h1>
          {session?.user.role === 'ambassador' && (
            <p className="pb-6">
              Váš návrh nyní musí schválit zaměstnanec propagace. Po schválení se bute moct na akci přihlásit.
            </p>
          )}
          <Link href={'/events'} className="btn">
            Zpátky na akce
          </Link>
        </div>
      </div>
    </div>
  );
}
