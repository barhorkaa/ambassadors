import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Registrace | AmbassadorsFIMU',
};

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
