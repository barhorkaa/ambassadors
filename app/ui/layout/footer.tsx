import { auth } from '@/auth';
import Link from 'next/link';

export async function Footer() {
  const session = await auth();

  return (
    <footer className="footer footer-center p-4 bg-fi-100 text-black">
      <aside>
        <p>Copyright © 2024 - All right reserved by OVVSP FI MU</p>
        {session && (
          <p>
            V případě, že najdete v aplikaci nějaký bug, nesrovnalost, nebo vám napadne nějaká feature, která by do
            aplikace mohla přidat vyplňte prosím{' '}
            <Link href={''} className="link">
              Google formulář
            </Link>{' '}
            a co nejdříve se tomu budeme věnovat.
          </p>
        )}
      </aside>
    </footer>
  );
}
