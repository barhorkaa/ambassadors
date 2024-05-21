import { auth } from '@/auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await auth();
  if (session) {
    redirect('/events/all');
  }

  return (
    <div className="page hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="hero-title">Skvělé! Teď jsi úspěšně zaregistrován/a!</h1>
          <p className="py-6">
            Nyní se prosím přihlaš a v aplikaci vyplň motivační dotazník. Po vyplnění jednoduchých otázek tvou
            registraci schválí náš manažer, a ty si můžeš začít organizovat čas, výjezdy či akce, na kterých nám chceš
            pomáhat. Děkujeme. Těšíme se na tebe!
          </p>
          <Link href={'/login'}>
            <button className="btn">Přihlásit se</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
