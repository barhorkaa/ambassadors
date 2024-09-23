'use client';

import { deleteSignUpAction } from '@/app/lib/actions/event-user';
import ModalLayout from '@/app/ui/modals/modal-layout';

interface DeleteSignUpModalProps {
  event_id: string;
  user_id: string;
}

export default function DeleteSignUpModal({ event_id, user_id }: DeleteSignUpModalProps) {
  return (
    <ModalLayout id={'delete_signup'} title={'Opravdu se chcete odhlásit z akce?'} modalType={'delete'}>
      <div className="pt-4 flex flex-col gap-4">
        <p>Po odhlásení se můžete znova přihlásit.</p>
        <p>Může se ale stát, že přijdete o své místo, pokud je na akci přihlášen nejký náhradník.</p>
        <div className="flex justify-end">
          <button
            className="btn"
            onClick={async () => {
              await deleteSignUpAction(event_id, user_id);
              if (document) {
                (document.getElementById('delete_signup') as HTMLFormElement).close();
              }
            }}
          >
            Ohlásit se z akce
          </button>
        </div>
      </div>
    </ModalLayout>
  );
}
