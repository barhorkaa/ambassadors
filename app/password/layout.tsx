import { CardSkeleton } from '@/app/ui/utils/skeletons';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Obnovení hesla - E-mail | AmbassadorsFIMU',
};

export default function Layout({ children, form }: { children: React.ReactNode; form: React.ReactNode }) {
  return (
    <section>
      {children}
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left p-4">
            <h1 className="hero-title">Zadejte svůj e-mail pro obnovení hesla.</h1>
            <p className="py-6 sm:py-2">E-mail musí být stejný, jaký použivate pro přihlášení do aplikace.</p>
          </div>
          <Suspense fallback={<CardSkeleton />}>{form}</Suspense>
        </div>
      </div>
    </section>
  );
}
