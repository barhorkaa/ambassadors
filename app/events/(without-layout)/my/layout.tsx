import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Moje akce | AmbassadorsFIMU',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="content flex items-end">
        <h1>Moje akce</h1>
      </div>
      <hr className="w-full" />
      {children}
    </section>
  );
}
