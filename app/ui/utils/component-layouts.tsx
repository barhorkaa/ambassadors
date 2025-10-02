import SubmitButton from '@/app/ui/button/submit-button';
import { StateModel } from '@/models/error-models';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface FormLayoutProps {
  action: any;
  state: StateModel;
  modalId?: string;
  children: React.ReactNode;
  buttonTitle?: string;
}

export const FormLayout = ({ action, state, modalId, children, buttonTitle }: FormLayoutProps) => (
  <form action={action} className="card-body p-4 md:p-6">
    {children}
    <SubmitButton title={buttonTitle ? buttonTitle : 'Odeslat'} modalId={modalId} fun={action} />
    {state.generic !== undefined && (
      <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
        <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
        <p className="text-sm text-red-500">{state.generic}</p>
      </div>
    )}
  </form>
);

interface HeroCenterLayoutProps {
  title: string;
  children: React.ReactNode;
  url?: string;
  buttonTitle?: string;
}

export const HeroCenterLayout = ({ title, children, url, buttonTitle }: HeroCenterLayoutProps) => (
  <div className="hero h-full">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="hero-title py-6">{title}</h1>
        {children}
        {url && (
          <Link href={url} className="btn">
            {buttonTitle}
          </Link>
        )}
      </div>
    </div>
  </div>
);
