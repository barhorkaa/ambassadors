import { BaseLayoutProps } from '@/app/utils/interface-props';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zprávy z akcí | AmbassadorsFIMU',
};

export default function Layout({ children }: BaseLayoutProps) {
  return (
    <section>
      <div className="flex flex-row justify-between items-center">
        <h1 className="content">Nové zprávy z akcí</h1>
        <ReportsInfoDropDown />
      </div>
      <hr className="w-full mb-8" />
      <div className="content">{children}</div>
    </section>
  );
}

const ReportsInfoDropDown = () => (
  <div className="dropdown dropdown-end dropdown-hover">
    <div tabIndex={0} role="button">
      <QuestionMarkCircleIcon className="h-5" />
    </div>
    <div tabIndex={0} className="card dropdown-content bg-base-100 rounded-none z-1 w-80 shadow-sm">
      <div tabIndex={0} className="card-body">
        <p>
          V této sekci aplikace naleznete seznam všech akcí, které nemají potvrzenou zprávu. Klinutím na nějakou akci se
          dostanete na její detail, kde si budete moct zprávu přečíst a potvrdit.
        </p>
      </div>
    </div>
  </div>
);
