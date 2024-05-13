import { auth } from '@/auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function DeniedRole() {
  const session = await auth();
  if (!session) {
    redirect('/');
  }

  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="hero-title">Upss... </h1>
          <h1 className="hero-title">K této části aplikace nemáte přístup</h1>
          <p className="py-6">Stránka, kterou jste se pokusili načíst vám není přístupná.</p>
          <Link href={'/'} className="btn">
            Zpátky na úvodní stránku
          </Link>
        </div>
      </div>
    </div>
  );
}
