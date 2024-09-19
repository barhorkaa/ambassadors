'use client';

import ModalLayout from '@/app/ui/modals/modal-layout';
import UserEditForm from '@/app/ui/user/user-edit-form';
import { UserModel } from '@/models/user-models';

interface EditUserModalProps {
  user: UserModel;
  full: boolean;
}

export default function EditUserModal({ user, full }: EditUserModalProps) {
  return (
    <ModalLayout id={user.id} title={'Upravit informace o uživateli'} modalType={'edit'}>
      {!full && (
        <p>
          Pokud si chcete změnit informace, které nevidíte ve formuláři, kontaktujte prosím{' '}
          <a href="mailto:propagace@fi.muni.cz">propagace@fi.muni.cz</a>
        </p>
      )}
      <UserEditForm user={user} full={full} />
    </ModalLayout>
  );
}
