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
      <SectionInfo title={''} contents={['V této části aplikace nalezneš seznamy akcí na které jsi přihlášen/a.']} />
      <hr />
      <SectionInfo
        title={'Jak se přihlásit na akci?'}
        contents={['Přihlásit na akci se můžes v sekci Akce, ke které se můžeš dostat přes boční menu vlevo.']}
      />
      <hr />
      <SectionInfo
        title={'Co to znamená být náhradník?'}
        contents={[
          'Náhradníkem se člověk stane pokud je vyčerpán limit pro přihlašování na akci.',
          'Jestli jsi přihlášen jako náhradník a někto z přihlášených se odhlásí, automaticky se na jeho ' +
            'místo posunu první náhradník.',
        ]}
      />
      <hr />
      <SectionInfo
        title={'Co mám dělat po přihlášení na akci??'}
        contents={[
          'Poté co se přihlásíte na akci musí vaše přihlášení schválit manažer z oddělení propagace. Zpravidla to bude ' +
            'většinou do jednoho týdne. Až po potvrzení od manažera se vaše přihlášení stáva plně platným.',
          'V aktuálním stavu aplikace vám ani manažerovi nepříde zádne upozornění, takže je třeba sledovat ' +
            'stav vašich přihlášení. ',
        ]}
      />
    </>
  );
}
