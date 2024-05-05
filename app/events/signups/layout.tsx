import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Přihlášení na akce | AmbassadorsFIMU',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
