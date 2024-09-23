import { CardSkeleton } from '@/app/ui/utils/skeletons';
import { BaseLayoutProps } from '@/app/utils/interface-props';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Nová akce | AmbassadorsFIMU',
};

interface LayoutProps {
  form: React.ReactNode;
}

export default function Layout({ children, form }: BaseLayoutProps & LayoutProps) {
  return (
    <section>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left p-4">
            <h1>Podejte návrh na novou akci</h1>
            <p className="py-6">
              Tento návrh pak zkontroluje jeden z našich manažerů a pokud bude všetko v pořádku, budete se moci na nšj
              přihlásit v rubrice &quot;Akce&quot;
            </p>
          </div>
          <Suspense fallback={<CardSkeleton />}>{form}</Suspense>
        </div>
      </div>
      {children}
    </section>
  );
}
