import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Historie akcí | AmbassadorsFIMU',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
