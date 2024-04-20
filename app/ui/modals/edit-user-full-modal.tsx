'use client';

import UserEditFullForm from '@/app/ui/user/user-edit-full-form';
import { UserModel } from '@/models/userModel';

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
        Upravit
      </button>
      <dialog id="edit_user_modal_manager" className="modal">
        <div className="modal-box">
          <h3>Upravit informace</h3>
          {/*<EventForm event={data.event} eventTypes={data.eventTypes} />*/}
          <UserEditFullForm user={data.user} />
        </div>
      </dialog>
    </>
  );
}
