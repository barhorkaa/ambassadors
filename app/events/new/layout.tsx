import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nová akce | AmbassadorsFIMU',
};

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return <section className="page">{children}</section>;
}
