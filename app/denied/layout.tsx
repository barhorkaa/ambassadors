import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Přístup zamítnut | AmbassadorsFIMU',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
