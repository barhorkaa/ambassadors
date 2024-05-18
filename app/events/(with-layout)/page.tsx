import { SectionInfo } from '@/app/ui/utils/data-display';

export default function Page() {
  return (
    <div className="content pt-4">
      <SectionInfo
        title={'Informace o akcích'}
        contents={[
          'Jako ambasador se můžete podílet na spoustě akcí pořádaných na fakultě, ale i mimo ní. ' +
            'Počet akcí, na které pojedete počas semestru je jedině na vás!',
        ]}
      />
      <hr />
      <SectionInfo
        title={'Jak se na akci přihlásit?'}
        contents={[
          'V sekci Aktivní akce si najděte akci, které byste se chtěli zúčastnit a rozklikněte si její detail. Na ' +
            'stránce detailu uvidíte tlačítko Přihlásit se, kterým se přihlásite na danou akci. Vaše přihlášení poté ' +
            'musí zchválit manažer, po schválení se u vašeho jména objeví ikonka Check. Toto znamená, že oddělení o vašem ' +
            'zájmu ví a počíta s Vámi.',
          'Pokud v sekci Aktivní akce nevidíte akci, na kterou by ste chtěli jet, můžete založit nový návrh na akci. ' +
            'Jednoduše klikněte na Přidat v pravé horní části této stránky a přidejte novou akci. Tato akce se poté objeví ' +
            'v sekci Nepotvrzené akce. Váš návrh bude muset opět schválit manažer a potom, co se tomu tak stane, se akce ' +
            'přesune do sekce Aktivbí akce a budete se na ní moc přihlásit. ',
        ]}
      />
      <hr />
    </div>
  );
}
