import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Druhy akcí | AmbassadorsFIMU',
};

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
