import { SectionInfo } from '@/app/ui/utils/data-display';
import { UserRoles } from '@/app/utils/user-roles';
import { auth } from '@/auth';

export default async function Page() {
  const session = await auth();

  return (
    <>
      <SectionInfo
        title={''}
        contents={['V této části aplikace jsou informace o různých druzích ckí, kterých se můžes zúčastnit.']}
      />
      <hr />
      <SectionInfo
        title={'K čemu slouží druhy akcí?'}
        contents={[
          'Všechny akce, kterých se můžeš zučasnit jsou nějakého typu.',
          'Tento druh lze zvolit při vytvoření akce a bude reporezentovat kategorii, do které akce zapadá.',
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
              'Jakožto manažer můžete libovolně přidávat, upravovat a manazat všechny typy akcí.',
              'Ambasadoři můťou videt pouze ty druhy akcí, které nejsou vymyzány.',
            ]}
          />
          <hr />
          <SectionInfo
            title={'Mazánií a obnovování druhů akcí'}
            contents={[
              'Když se vymaže nejaký druh akce tak se již nebude moct používat jako typ akce při vytváření nových akcí.',
              'Pro obnovení nejakého druhu akce stčí přejíť na Vymazané druhy akcí a stistknout tlačítko obnovit. ' +
                'Poté bude typ znova viditelný pro všechny.',
            ]}
          />
        </>
      )}
    </>
  );
}
