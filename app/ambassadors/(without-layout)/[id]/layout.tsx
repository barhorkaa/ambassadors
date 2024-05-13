import BackNavigation from '@/app/ui/layout/back-navigation';
import { auth } from '@/auth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Informace o uživateli | AmbassadorsFIMU',
};

export default async function Layout({
  children,
  motivation,
  user,
  signups,
}: {
  children: React.ReactNode;
  motivation: React.ReactNode;
  user: React.ReactNode;
  signups: React.ReactNode;
}) {
  const session = await auth();

  return (
    <section>
      <div className="align-text-bottom flex flex-row gap-4">
        <BackNavigation href={'/ambassadors'} tooltip={'Zpátky na Uživatele'} />
        <h1 className="font-light text-xl">Informace o uživateli</h1>
      </div>
      {children}
      <div className="grid grid-cols-1 grid-rows-[min-content_min-content] md:grid-cols-3 md:grid-rows-1 gap-4 md:px-6">
        {user}
        {motivation}
      </div>
      {session?.user.role === 'manager' && (
        <div className="md:px-6">
          <hr />
          {signups}
        </div>
      )}
    </section>
  );
}
