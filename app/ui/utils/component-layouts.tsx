import SubmitButton from '@/app/ui/button/submit-button';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

export function FormLayout({
  action,
  state,
  modalId,
  children,
}: {
  action: any;
  state: any;
  modalId: string;
  children: React.ReactNode;
}) {
  return (
    <form action={action} className="card-body">
      {children}
      <SubmitButton title={'Odeslat'} modalId={modalId} fun={action} />
      {state.generic && (
        <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
          <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
          <p className="text-sm text-red-500">{state.generic}</p>
        </div>
      )}
    </form>
  );
}
