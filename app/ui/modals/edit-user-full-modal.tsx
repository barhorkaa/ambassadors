'use client';

import UserEditFullForm from '@/app/ui/user/user-edit-full-form';
import { UserModel } from '@/models/user-models';
import { PencilIcon } from '@heroicons/react/24/outline';

export default function EditUserFullModal(data: { user: UserModel }) {
  return (
    <>
      <button
        className="btn"
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
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-base-100">✕</button>
          </form>
          <h3>Upravit informace</h3>
          <UserEditFullForm user={data.user} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
