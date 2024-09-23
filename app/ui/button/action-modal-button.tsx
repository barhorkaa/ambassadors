import { CheckIcon } from '@heroicons/react/24/outline';

interface ActionModalButtonProps {
  fun: any;
  id: string;
  modalId: string;
}

export function ActionModalButton({ fun, id, modalId }: ActionModalButtonProps) {
  return (
    <button
      className="btn"
      onClick={async () => {
        try {
          await fun(id);
          if (document && modalId) {
            (document.getElementById(modalId) as HTMLFormElement).close();
          }
        } catch (e) {
          return;
        }
      }}
    >
      <CheckIcon className="h-5" />
      <p className="hidden md:block">Potvrdit</p>
    </button>
  );
}
