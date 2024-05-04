'use client';

import { MaterialForm } from '@/app/ui/material/material-form';
import { MaterialDetailModel } from '@/models/material-models';
import { PencilIcon } from '@heroicons/react/24/outline';

export default function EditMaterialModal(data: { material: MaterialDetailModel }) {
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          if (document) {
            (document.getElementById(data.material.id) as HTMLFormElement).showModal();
          }
        }}
      >
        <PencilIcon className="h-5" />
        <p className="hidden md:block">Upravit</p>
      </button>
      <dialog id={data.material.id} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-base-100">✕</button>
          </form>
          <h3>Upravit informace</h3>
          <MaterialForm material={data.material} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
