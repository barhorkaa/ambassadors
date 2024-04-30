import { Footer } from '@/app/ui/layout/footer';
import NavBar from '@/app/ui/layout/nav-bar';
import NavBarUser from '@/app/ui/layout/nav-bar-user';
import { auth } from '@/auth';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AmbassadorsFIMU',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={inter.className}>
        {session?.user ? <NavBarUser></NavBarUser> : <NavBar></NavBar>}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
