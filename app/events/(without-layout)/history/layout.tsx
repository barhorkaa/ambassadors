import { BaseLayoutProps } from '@/app/utils/interface-props';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Historie akcí | AmbassadorsFIMU',
};

export default function Layout({ children }: BaseLayoutProps) {
  return (
    <section>
      <h1 className="content">Historie akcí</h1>
      <hr className="w-full" />
      <div className="content">
        <p>Na této stránce naleznete seznam akcí, které už úspěšně poběhli!</p>
        <hr />
        {children}
      </div>
    </section>
  );
}
