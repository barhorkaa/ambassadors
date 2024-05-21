import MotivationForm from '@/app/ui/motivation/motivation-form';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await auth();
  if (!session) {
    redirect('/');
  }

  if (session.user.motivated) {
    redirect('/events');
  }
  const userId = session.user.id;

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left p-4">
          <h1 className="hero-title">Proč ses rozhodl/a propagovat FI?</h1>
          <p className="py-6">
            Tento dotazník nám pomáhá zjistit, proč se studenti FI rozhodnou propagovat svou fakultu. Tvou ochotu
            vyplnit tento formulář vnímáme jako důkaz, že to myslíš vážně.
          </p>
          <p className="py-6">
            Vyplnění dotazníku je nutné pro účast v programu a tvé přihlašování na jednotlivé akce. Děkujeme za
            spolupráci!
          </p>
        </div>
        <div className="card">
          <MotivationForm userId={userId} />
        </div>
      </div>
    </div>
  );
}
