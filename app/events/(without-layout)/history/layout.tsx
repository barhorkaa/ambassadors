import InfoDropDown from '@/app/ui/utils/info-dropdown';
import { BaseLayoutProps } from '@/app/utils/interface-props';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Historie akcí | AmbassadorsFIMU',
};

export default function Layout({ children }: BaseLayoutProps) {
  return (
    <section>
      <div className="flex flex-row justify-between items-center">
        <h1 className="content">Historie akcí</h1>
        <InfoDropDown info="Na této stránce naleznete seznam akcí, které už úspěšně poběhli!" />
      </div>
      <hr className="w-full mb-8" />
      <div className="content">{children}</div>
    </section>
  );
}
