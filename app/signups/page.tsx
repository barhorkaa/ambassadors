import { SectionInfo } from '@/app/ui/utils/data-display';

export default function Page() {
  return (
    <>
      <p className="pb-2">Tato část aplikace slouží na přehled o aktuálních přihláseních na akce.</p>
      <SectionInfo
        title={'Nepotvrzená přihlášení na akce'}
        contents={[
          'Když se ambasador chce zúčastnit na akci přihlásí se na ní ze svého účtu. Toto přihlášní je potřebné ' +
            'potvrdit v sekci Nepotvrzená přihlášení. ',
        ]}
      />
    </>
  );
}
