import { CardSkeleton } from '@/app/ui/utils/skeletons';
import { auth } from '@/auth';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Registrace | AmbassadorsFIMU',
};

export default async function Layout({ children, form }: { children: React.ReactNode; form: React.ReactNode }) {
  const session = await auth();
  if (session) {
    redirect('/events');
  }
  return (
    <section>
      {children}
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left p-4">
            <h1>Přidejte se k nám a dělejte FI dobré jméno!</h1>
            <p className="py-6">
              Po přihlášení budete míť přístup ke všem akcím a možnost se na přihlásit. Pojďte s námi představit Fakultu
              informatiky Masarykovy Univerzity světu!
            </p>
          </div>
          <Suspense fallback={<CardSkeleton />}>{form}</Suspense>
        </div>
      </div>
    </section>
  );
}
