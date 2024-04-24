'use client';

import UserEditForm from '@/app/ui/user/user-edit-form';
import { UserModel } from '@/models/userModel';

export default function EditUserModal(data: { user: UserModel }) {
  return (
    <>
      <button
        onClick={() => {
          if (document) {
            (document.getElementById('edit_user_modal') as HTMLFormElement).showModal();
          }
        }}
      >
        Upravit informace
      </button>
      <dialog id="edit_user_modal" className="modal">
        <div className="modal-box">
          <h3>Upravit informace</h3>
          <UserEditForm user={data.user} />
        </div>
      </dialog>
    </>
  );
}
