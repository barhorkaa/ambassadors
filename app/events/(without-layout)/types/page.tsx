import { SectionInfo } from '@/app/ui/utils/data-display';
import { UserRoles } from '@/app/utils/user-roles';
import { auth } from '@/auth';

export default async function Page() {
  const session = await auth();

  return (
    <>
      <SectionInfo
        title={''}
        contents={['V této části aplikace jsou informace o různých druzích akcí, kterých se můžeš zúčastnit.']}
      />
      <hr />
      <SectionInfo
        title={'K čemu slouží druhy akcí?'}
        contents={[
          'Všechny akce, kterých se můžeš zučasnit jsou nějakého typu.',
          'Tento typ lze zvolit při vytvoření akce a bude reporezentovat kategorii, do které akce zapadá.',
          'Podle toho se potom při detailu akce ukáží všeobecné pokyny pro ambasadory.',
        ]}
      />
      <hr />
      <SectionInfo
        title={'Co jsou jednotlivé typy?'}
        contents={[
          'Každý druh akce osbahuje krátký popis a instrukce pro ambasadory. Podle nich si můžeš udělat ' +
            'lepší obraz, co se na akci bude dít a jestili bys měl/a zájem se na takové akci podílet.',
        ]}
      />
      {session?.user.role === UserRoles.manager && (
        <>
          <hr />
          <SectionInfo
            title={'Co můžu s druhy akcí dělat?'}
            contents={[
              'Jakožto manažer můžete libovolně přidávat, upravovat a mazat všechny typy akcí.',
              'Ambasadoři můžou vidět pouze ty druhy akcí, které nejsou smazány.',
            ]}
          />
          <hr />
          <SectionInfo
            title={'Mazání a obnovování druhů akcí'}
            contents={[
              'Druh akce vymažete tak, že stisknete tlačítko Smazat u daného typu.',
              'Když se vymaže nejaký druh akce tak se již nebude moct používat jako typ akce při vytváření nových akcí.',
              'Pro obnovení nejakého druhu akce stačí přejít na Vymazané druhy akcí a stistknout tlačítko Obnovit. ' +
                'Poté bude typ znova viditelný pro všechny.',
            ]}
          />
        </>
      )}
    </>
  );
}
