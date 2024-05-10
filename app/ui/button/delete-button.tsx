import { CheckIcon } from '@heroicons/react/24/outline';

export function DeleteButton({ fun, id, modalId }: { fun: any; id: string; modalId: string }) {
  return (
    <button
      className="btn"
      onClick={async () => {
        await fun(id);
        if (document && modalId) {
          (document.getElementById(modalId) as HTMLFormElement).close();
        }
      }}
    >
      <CheckIcon className="h-5" />
      <p className="hidden md:block">Potvrdit</p>
    </button>
  );
}
