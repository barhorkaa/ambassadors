import ModalLayout from '@/app/ui/modals/modal-layout';
import { SectionInfo } from '@/app/ui/utils/data-display';

export default function InfoEventsModal() {
  return (
    <ModalLayout id="eventsInfo" title="Informace o akcích" modalType="info">
      <SectionInfo
        title={''}
        contents={[
          'Jako ambasador se můžeš podílet na spoustě akcí pořádaných na fakultě, ale i mimo ní. ' +
            'Počet akcí, na které pojedeš počas semestru je jedině na tobě!',
        ]}
      />
      <hr />
      <SectionInfo
        title={'Jak se na akci přihlásit?'}
        contents={[
          'V sekci Aktivní akce si najdi akci, které byses se chtěl/a zúčastnit a rozklikni si její detail. Na ' +
            'stránce detailu uvidíš tlačítko Přihlásit se, kterým se přihlásíš na danou akci. Tvoje přihlášení poté ' +
            'musí zchválit manažer, po schválení se u tvojeho jména objeví ikonka Check. To znamená, že oddělení o tvém ' +
            'zájmu ví a počíta s tebou.',
        ]}
      />
      <hr />
      <SectionInfo
        title={'Založení nové akce'}
        contents={[
          'Pokud v sekci Aktivní akce nevidíš akci, na kterou bys chtěl/a jet, můžeš založit nový návrh na akci. ' +
            'Jednoduše klikni na Přidat v pravé horní části této stránky a přidej novou akci. Tato akce se poté objeví ' +
            'v sekci Nepotvrzené akce. Váš návrh bude muset opět schválit manažer a potom, co se tomu tak stane, se akce ' +
            'přesune do sekce Aktivbí akce a budeš se na ní moc přihlásit.',
        ]}
      />
    </ModalLayout>
  );
}
