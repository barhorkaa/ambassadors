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
      <div className="align-text-bottom">
        <h1 className="font-light text-xl">Informace o uživateli</h1>
      </div>
      {children}
      <div className="grid grid-cols-1 grid-rows-[min-content_min-content] md:grid-cols-3 md:grid-rows-1 gap-4 md:px-6">
        {user}
        {motivation}
      </div>
    </section>
  );
}
