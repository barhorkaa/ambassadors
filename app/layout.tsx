import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from "@/app/ui/nav-bar";
import NavBarUser from "@/app/ui/nav-bar-user";
import {auth} from "@/auth";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ambassadors FI MU',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={inter.className}>
        {session ? <NavBarUser></NavBarUser> : <NavBar></NavBar>}
        <div className={"body"}>
          {children}
        </div>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <aside>
            <p>Copyright © 2024 - All right reserved by OVVSP FI MU</p>
          </aside>
        </footer>
      </body>
    </html>
  )
}
