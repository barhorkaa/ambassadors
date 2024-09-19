'use client';

import ModalLayout from '@/app/ui/modals/modal-layout';
import UserEditForm from '@/app/ui/user/user-edit-form';
import { UserModel } from '@/models/user-models';
import Link from 'next/link';

interface EditUserModalProps {
  user: UserModel;
  full: boolean;
  canEditPassword: boolean;
}

export default function EditUserModal({ user, full, canEditPassword }: EditUserModalProps) {
  return (
    <ModalLayout id={user.id} title={'Upravit informace o uživateli'} modalType={'edit'}>
      {!full && (
        <p>
          Pokud si chcete změnit informace, které nevidíte ve formuláři, kontaktujte prosím{' '}
          <a href="mailto:propagace@fi.muni.cz">propagace@fi.muni.cz</a>
        </p>
      )}
      <UserEditForm user={user} full={full} />
      {canEditPassword && (
        <>
          <hr className="w-full" />
          <div className=" form-control">
            <label className="label" htmlFor="password">
              <span className="label-text">Heslo</span>
            </label>
            <Link href={'/password/change'} className="btn bg-fi-100 m-0">
              Změnit heslo
            </Link>
          </div>
        </>
      )}
    </ModalLayout>
  );
}
