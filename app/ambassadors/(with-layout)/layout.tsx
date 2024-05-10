import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uživatelé | AmbassadorsFIMU',
};

export default function Layout({
  children,
  ambassadors,
  managers,
  unapproved,
}: {
  children: React.ReactNode;
  ambassadors: React.ReactNode;
  managers: React.ReactNode;
  unapproved: React.ReactNode;
}) {
  return (
    <section>
      <h1>Uživatelé</h1>
      <hr className="w-full" />
      <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Nepotvrzeni" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          {unapproved}
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Ambasadoři" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          {ambassadors}
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab w-fit" aria-label="Manažeři" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          {managers}
        </div>
      </div>
      {children}
    </section>
  );
}