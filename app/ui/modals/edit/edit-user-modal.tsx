'use client';

import ModalLayout from '@/app/ui/modals/modal-layout';
import UserEditForm from '@/app/ui/user/user-edit-form';
import { UserModel } from '@/models/user-models';

export default function EditUserModal(data: { user: UserModel; full: boolean }) {
  return (
    <ModalLayout id={data.user.id} title={'Upravit informace o uživateli'} modalType={'edit'}>
      <p>Pokud si chcete změnit informace, které nevidíte ve formuláři, kontaktujte prosím propagace@fi.muni.cz</p>
      <UserEditForm user={data.user} full={data.full} />
    </ModalLayout>
  );
}
