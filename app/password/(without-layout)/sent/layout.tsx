import { BaseLayoutProps } from '@/app/utils/interface-props';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Obnovení hesla - E-mail zaslán | AmbassadorsFIMU',
};

export default function Layout({ children }: BaseLayoutProps) {
  return <section>{children}</section>;
}
