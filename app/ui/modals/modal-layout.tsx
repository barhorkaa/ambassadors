'use client';

import { ArrowPathIcon, BellIcon, PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

type ModalType = 'create' | 'edit' | 'delete' | 'revive' | 'notifications';

interface ModalLayoutProps {
  children: any;
  id: string;
  title: string;
  modalType: ModalType;
  buttonTitle?: string;
}

export default function ModalLayout({ children, id, title, modalType, buttonTitle }: ModalLayoutProps) {
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
        <ButtonContent modalType={modalType} buttonTitle={buttonTitle} />
      </button>
      <dialog id={id} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-base-100">✕</button>
          </form>
          <h3>{title}</h3>
          <div className="card-compact md:card-normal">{children}</div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

function ButtonContent({ modalType, buttonTitle }: { modalType: ModalType; buttonTitle?: string }) {
  switch (modalType) {
    case 'create':
      return (
        <>
          <PlusIcon className="h-5" />
          <p className="hidden md:block">{buttonTitle ?? 'Přidat'}</p>
        </>
      );
    case 'edit':
      return (
        <>
          <PencilIcon className="h-5" />
          <p className="hidden md:block">{buttonTitle ?? 'Upravit'}</p>
        </>
      );
    case 'delete':
      return (
        <>
          <TrashIcon className="h-5" />
          <p className="hidden md:block">{buttonTitle ?? 'Smazat'}</p>
        </>
      );
    case 'revive':
      return (
        <>
          <ArrowPathIcon className="h-5" />
          <p className="hidden md:block">{buttonTitle ?? 'Odnovit'}</p>
        </>
      );
    case 'notifications':
      return (
        <>
          <BellIcon className="h-5" />
          <p className="hidden md:block">Notifikace</p>
        </>
      );
  }
}
