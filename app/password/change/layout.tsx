import { CardSkeleton } from '@/app/ui/utils/skeletons';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Přihlášení | AmbassadorsFIMU',
};

export default function Layout({ children, form }: { children: React.ReactNode; form: React.ReactNode }) {
  return (
    <section>
      {children}
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left p-4">
            <h1 className="hero-title">Změna hesla</h1>
            <p className="py-6 sm:py-2">Pro změnu hesla musíte vyplnit nasledujíci formulář.</p>
            <p className="py-6 sm:py-2">Po úspěšném odeslání budete odhlášeni.</p>
          </div>
          <Suspense fallback={<CardSkeleton />}>{form}</Suspense>
        </div>
      </div>
    </section>
  );
}
