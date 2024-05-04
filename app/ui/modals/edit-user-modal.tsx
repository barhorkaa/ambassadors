'use client';

import UserEditForm from '@/app/ui/user/user-edit-form';
import { UserModel } from '@/models/user-models';
import { PencilIcon } from '@heroicons/react/24/outline';

export default function EditUserModal(data: { user: UserModel }) {
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          if (document) {
            (document.getElementById('edit_user_modal') as HTMLFormElement).showModal();
          }
        }}
      >
        <PencilIcon className="h-5" />
        <p className="hidden md:block">Upravit</p>
      </button>
      <dialog id="edit_user_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-base-100">✕</button>
          </form>
          <h3>Upravit informace</h3>
          <UserEditForm user={data.user} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
