import ModalLayout from '@/app/ui/modals/modal-layout';
import { SectionInfo } from '@/app/ui/utils/data-display';
import { UserRoles } from '@/app/utils/user-roles';
import { auth } from '@/auth';

export default async function InfoMaterialsModal() {
  const session = await auth();

  return (
    <ModalLayout id="materialInfo" title="Materiály" modalType="info">
      <SectionInfo
        title={''}
        contents={[
          'V této části aplikace jsou informace o propagačních materiálech a merchu, které ' +
            'můžeš sebou brát na akce.',
        ]}
      />
      <hr />
      <SectionInfo
        title={'K čemu slouží materiály?'}
        contents={[
          'Propagační materiály typu brožury a letáky obsahují informace o relevantních tématech ' +
            'pro uchazeče a nadcházející studenty.',
          'Fakultní merch na druhou stranu složí jako malý dárek pro uchazeče, který v nich má vyvolat zájem o fakultu.',
          'Všechny materiály se rozdávají uchazečům zdarma na akcích.',
        ]}
      />
      <hr />
      <SectionInfo
        title={'Co jsou jednotlivé materiály?'}
        contents={[
          'Seznam všech materiálů, které jsou k dispozici najdeś po stisknutí "Dostupné metriály" ' +
            'v menu této stránky.',
          'Každý materiál obsahuje krátky popis o tom, co obsahuje nebo jak vypadá. Fotky materiálů budou ' +
            'přidány později.',
        ]}
      />
      {session?.user.role === UserRoles.manager && (
        <>
          <hr />
          <SectionInfo
            title={'Co můžu s materiály dělat jako manažer?'}
            contents={[
              'Materiály můžete libovolně přidávat, upravovat a mazat podle aktuálních stavů zásob.',
              'Ambasadoři můžou vidět pouze ty materiály, které nejsou smazány.',
            ]}
          />
          <hr />
          <SectionInfo
            title={'Mazání a obnovování materiálů'}
            contents={[
              'Manteriály vymažete tak, že stisknete tlačítko Smazat u daného materiálu.',
              'Když se vymaže nejaký materiál tak se již nebude moct používat při vyplňování zrpáv z akce.',
              'Pro obnovení nejakého materiálu stačí přejít na Vymazané materiály a stistknout tlačítko Obnovit. ' +
                'Poté bude typ znova viditelný pro všechny.',
            ]}
          />
        </>
      )}
    </ModalLayout>
  );
}
