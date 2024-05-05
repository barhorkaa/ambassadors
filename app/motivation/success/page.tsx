import { auth, signOut } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Success() {
  const session = await auth();
  if (!session) {
    redirect('/');
  }
  return (
    <div className="page hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="hero-title">Váš motivační dotazník byl úspešně zaslán!</h1>
          <p className="py-6">Nyní se odhlaste aby se změny projevili. Po přihlášení uvidíte v aplikaci další kroky.</p>
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <button className="btn">Odhlásit se</button>
          </form>
        </div>
      </div>
    </div>
  );
}
