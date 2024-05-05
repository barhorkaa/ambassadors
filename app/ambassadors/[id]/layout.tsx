import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Informace o uživateli | AmbassadorsFIMU',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="page">{children}</section>;
}
