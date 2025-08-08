'use client';

import GroupEmailForm from '@/app/ui/event-group-emails/group-email-form';
import ModalLayout from '@/app/ui/modals/modal-layout';

export default function CreateGroupEmailModal({ eventId }: { eventId: string }) {
  return (
    <ModalLayout
      id={'create_group_email_modal'}
      title={'Hromadný e-mail pro přihlášené uživatele'}
      modalType={'create'}
      buttonTitle={'Poslat hromadný e-mail'}
      wider={true}
    >
      <GroupEmailForm eventId={eventId} />
      <p className="text-sm">
        E-mail se pošle všem uživatelům, kteří jsou přihlášeni na akci i náhradníkům. Správa se také uloží do sekce
        stránky `&quot;`Doplňující informace`&quot;` a bude dostupná všem ambasadorům, kteří se na akci podívají.
      </p>
    </ModalLayout>
  );
}
