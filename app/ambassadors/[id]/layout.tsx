import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Informace o uživateli | AmbassadorsFIMU',
};

export default function Layout({
  children,
  motivation,
  user,
}: {
  children: React.ReactNode;
  motivation: React.ReactNode;
  user: React.ReactNode;
}) {
  return (
    <section>
      {children}
      <div className="grid grid-cols-2 grid-rows-1">
        {user}
        {motivation}
      </div>
    </section>
  );
}
