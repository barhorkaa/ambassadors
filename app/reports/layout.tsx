import InfoDropDown from '@/app/ui/utils/info-dropdown';
import { BaseLayoutProps } from '@/app/utils/interface-props';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zprávy z akcí | AmbassadorsFIMU',
};

export default function Layout({ children }: BaseLayoutProps) {
  const info =
    'V této sekci aplikace naleznete seznam všech akcí, které nemají potvrzenou zprávu. Klinutím na nějakou akci se ' +
    'dostanete na její detail, kde si budete moct zprávu přečíst a potvrdit.';

  return (
    <section>
      <div className="flex flex-row justify-between items-center">
        <h1 className="content">Nové zprávy z akcí</h1>
        <InfoDropDown info={info} />
      </div>
      <hr className="w-full mb-8" />
      <div className="content">{children}</div>
    </section>
  );
}
