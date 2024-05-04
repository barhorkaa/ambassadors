'use client';

import ModalLayout from '@/app/ui/modals/modal-layout';
import UserEditFullForm from '@/app/ui/user/user-edit-full-form';
import { UserModel } from '@/models/user-models';

export default function EditUserModal(data: { user: UserModel; full: boolean }) {
  return (
    <ModalLayout id={data.user.id} title={'Upravit informace o uživateli'} create={false}>
      <UserEditFullForm user={data.user} full={data.full} />
    </ModalLayout>
  );
}
