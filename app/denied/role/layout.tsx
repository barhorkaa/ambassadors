import { BaseLayoutProps } from '@/app/utils/interface-props';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Neoprávněný přístup | AmbassadorsFIMU',
};

export default function Layout({ children }: BaseLayoutProps) {
  return <section>{children}</section>;
}
