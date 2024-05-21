import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zprávy z akcí | AmbassadorsFIMU',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h1 className="content">Nové zprávy z akcí</h1>
      <hr className="w-full" />
      <div className="content">
        <p>
          V této sekci aplikace naleznete seznam všech akcí, které nemají potvrzenou zprávu. Klinutím na nějakou akci se
          dostanete na její detail, kde si budete moct zprávu přečíst a potvrdit.
        </p>
        <hr />
        {children}
      </div>
    </section>
  );
}
