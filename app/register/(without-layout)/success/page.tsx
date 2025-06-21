import { HeroCenterLayout } from '@/app/ui/utils/component-layouts';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await auth();
  if (session) {
    redirect('/events');
  }

  return (
    <HeroCenterLayout title={'Skvělé! Teď jsi úspěšně zaregistrován/a!'} url={'/login'} buttonTitle={'Přihlásit se'}>
      <p className="py-6">
        Nyní se prosím přihlaš a v aplikaci vyplň motivační dotazník. Po vyplnění jednoduchých otázek tvou registraci
        schválí náš manažer, a ty si můžeš začít organizovat čas, výjezdy či akce, na kterých nám chceš pomáhat.
        Děkujeme. Těšíme se na tebe!
      </p>
    </HeroCenterLayout>
  );
}
