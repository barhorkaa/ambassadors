'use client';

import UserEditFullForm from '@/app/ui/user/user-edit-full-form';
import { UserModel } from '@/models/userModel';
import { PencilIcon } from '@heroicons/react/24/outline';

export default function EditUserFullModal(data: { user: UserModel }) {
  return (
    <>
      <button
        onClick={() => {
          if (document) {
            (document.getElementById('edit_user_modal_manager') as HTMLFormElement).showModal();
          }
        }}
      >
        <PencilIcon className="h-5" />
        <p className="hidden md:block">Upravit</p>
      </button>
      <dialog id="edit_user_modal_manager" className="modal">
        <div className="modal-box">
          <h3>Upravit informace</h3>
          <UserEditFullForm user={data.user} />
        </div>
      </dialog>
    </>
  );
}
