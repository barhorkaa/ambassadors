import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nová akce | AmbassadorsFIMU',
};

export default function Layout({ children, form }: { children: React.ReactNode; form: React.ReactNode }) {
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
          {form}
        </div>
      </div>
      {children}
    </section>
  );
}
