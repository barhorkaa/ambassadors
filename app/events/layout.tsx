import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Akce | AmbassadorsFIMU',
};

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
