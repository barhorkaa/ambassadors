import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Detail akce | AmbassadorsFIMU',
};

export default function Layout({
  children,
  event,
  type,
  users,
  report,
}: {
  children: React.ReactNode;
  event: React.ReactNode;
  type: React.ReactNode;
  users: React.ReactNode;
  report: React.ReactNode;
}) {
  return (
    <section>
      <div className="align-text-bottom">
        <h1 className="font-light text-xl">Detail akce</h1>
      </div>
      {children}
      <div>
        {event}
        <div className="grid grid-cols-3 grid-rows-3">
          {type}
          {users}
          {report}
        </div>
      </div>
    </section>
  );
}
