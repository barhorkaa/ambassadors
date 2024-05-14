import { auth } from '@/auth';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Registrace | AmbassadorsFIMU',
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (session) {
    redirect('/events');
  }
  return <section>{children}</section>;
}
