'use client';

import { PencilIcon, PlusIcon } from '@heroicons/react/24/outline';

export default function ModalLayout({
  children,
  id,
  title,
  create,
}: {
  children: any;
  id: string;
  title: string;
  create: boolean;
}) {
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          if (document) {
            (document.getElementById(id) as HTMLFormElement).showModal();
          }
        }}
      >
        {create ? (
          <>
            <PlusIcon className="h-5" />
            <p className="hidden md:block">Přidat</p>
          </>
        ) : (
          <>
            <PencilIcon className="h-5" />
            <p className="hidden md:block">Upravit</p>
          </>
        )}
      </button>
      <dialog id={id} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-base-100">✕</button>
          </form>
          <h3>{title}</h3>
          {children}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
