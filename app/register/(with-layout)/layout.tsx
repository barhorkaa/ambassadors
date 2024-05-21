import { CardSkeleton } from '@/app/ui/utils/skeletons';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Registrace | AmbassadorsFIMU',
};

export default function Layout({ children, form }: { children: React.ReactNode; form: React.ReactNode }) {
  return (
    <section>
      {children}
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left p-4">
            <h1>Registruj se a staň se ambasadorem FI MU.</h1>
            <p className="py-6">
              Být ambasadorem je poslání. Díky své účasti nám můžeš pomoci šířit dobré jméno naší fakulty. Děkujeme.
            </p>
            <p>
              Registrací získáš přehled o chystaných akcích či projektech pro ambasadory a budeš si moci organizovat
              svou účast na jednotlivých událostech. Navíc můžeš naplánovat svou akci, týkající se prezentace fakulty
              (typicky výjezdy na ZŠ/SŠ).
            </p>
          </div>
          <Suspense fallback={<CardSkeleton />}>{form}</Suspense>
        </div>
      </div>
    </section>
  );
}
