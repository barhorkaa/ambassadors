import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uživatelé | AmbassadorsFIMU',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h1 className="content">Uživatelé</h1>
      <hr className="w-full" />
      <div role="tablist" className="tabs tabs-lifted content">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Nepotvrzeni" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"></div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Ambasadoři" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"></div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab w-fit" aria-label="Manažeři" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"></div>
      </div>
      {children}
    </section>
  );
}
