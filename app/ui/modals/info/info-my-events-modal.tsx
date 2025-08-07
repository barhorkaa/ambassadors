import ModalLayout from '@/app/ui/modals/modal-layout';
import { SectionInfo } from '@/app/ui/utils/data-display';

export default function InfoMyEventsModal() {
  return (
    <ModalLayout id="myEventsInfo" title="Informace o mých akcích" modalType="info">
      <SectionInfo title={''} contents={['V této části aplikace nalezneš seznamy akcí, na které jsi přihlášen/a.']} />
      <hr />
      <SectionInfo
        title={'Jak se přihlásit na akci?'}
        contents={['Přihlásit na akci se můžeš v sekci Akce, ke které se můžeš dostat přes boční menu vlevo.']}
      />
      <hr />
      <SectionInfo
        title={'Co to znamená být náhradník?'}
        contents={[
          'Náhradníkem se člověk stane, pokud je vyčerpán limit pro přihlašování na akci.',
          'Jestli jsi přihlášen jako náhradník a někto z přihlášených se odhlásí, automaticky se na jeho ' +
            'místo posunu první náhradník.',
        ]}
      />
      <hr />
      <SectionInfo
        title={'Co mám dělat po přihlášení na akci??'}
        contents={[
          'Poté co se přihlásíš na akci musí tvoje přihlášení schválit manažer z oddělení propagace. Zpravidla to bude ' +
            'většinou do jednoho týdne. Až po potvrzení od manažera se tvoje přihlášení stáva plně platným.',
          'V aktuálním stavu aplikace tobě ani manažerovi nepříde žádné upozornění, takže je třeba sledovat ' +
            'stav tvích přihlášení. ',
        ]}
      />
    </ModalLayout>
  );
}
