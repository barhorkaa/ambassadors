'use client';

import { MaterialForm } from '@/app/ui/material/material-form';
import { PlusIcon } from '@heroicons/react/24/outline';

export default function CreateMaterialModal() {
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          if (document) {
            (document.getElementById('create_material_modal') as HTMLFormElement).showModal();
          }
        }}
      >
        <PlusIcon className="h-5" />
        <p className="hidden md:block">Přidat</p>
      </button>
      <dialog id="create_material_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-base-100">✕</button>
          </form>
          <h3>Nový materiál</h3>
          <MaterialForm material={null} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
