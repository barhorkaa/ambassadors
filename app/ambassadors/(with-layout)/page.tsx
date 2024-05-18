import { SectionInfo } from '@/app/ui/utils/data-display';

export default function Ambassadors() {
  return (
    <div className="content">
      <p>
        V této sekci aplikace můžete najít informace o uživatelech systému. Po rozkliknutí menu nahoře vpravo se Vám
        ukáží seznamy uživatelů dané ketegorie. Zpět na tuto stránku se dostanete kliknutím na nápis nebo přes postranní
        menu.
      </p>
      <hr />
      <SectionInfo
        title={'Nepotrvzení uživatelé'}
        contents={[
          'Tato sekce obsahuje seznam nových uživatelů, kterých účty ještě nebyli potvrzeny.',
          'Bez potvrzení účtu se uživatel nemůže dostat k hlavním častím aplikace jako jsou: seznamy akcí, infomace o akcích a pod.',
          'Pro potvrzení registrace je nutné přejít na detail uživatele kliknutím na jeho jméno nebo odkaz při jeho jméně. Poté budte ' +
            'mít možnost si prohlédnout motivační formulář uživatele a na základě něho se rozhodnout, zda je vhodným adeptem do programu.',
          'Jestli budete spokojení s uživatelem, můžete registraci potvrdit stisknutím tlačitka "Potvrdit".',
        ]}
      />
      <hr />
      <SectionInfo
        title={'Ambasadoři'}
        contents={[
          'Tato sekce obsahuje seznam uživatelů, který jsou v systému vedení jako ambasadoři.',
          'Ambasadoři nemají právo přístupu k celému systému, ale jenom k jeho částím.',
          'Chování ambasadora v aplikaci je motivorováno a některé jeho činnosti músí být z potvrzované manažerem. Aby se ' +
            'ambasador přihlásil na akci, musí být jeho přihlášení schváleno.',
        ]}
      />
      <hr />
      <SectionInfo
        title={'Manažeři'}
        contents={[
          'Tato sekce obsahuje seznam uživatelů, který jsou v systému vedení jako manažeři.',
          'Manažer má v aplikaci vyšší práva a umí se dostat k všem jejích částím.',
          'Může zejména spravovat obsah aplikace, volně přidávat a odebírat akce, typy akcí a materiály.',
          'Manažer má taky za úkol potvrzovat registrace ambasadorů, jejich přihlášení na akce a také návrhy na nové akce.',
        ]}
      />
    </div>
  );
}
