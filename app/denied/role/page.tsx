import { HeroCenterLayout } from '@/app/ui/utils/component-layouts';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await auth();
  if (!session) {
    redirect('/');
  }

  return (
    <HeroCenterLayout title={'Upss...'} url={'/'} buttonTitle={'Zpátky na úvodní stránku'}>
      <h1 className="hero-title">K této části aplikace nemáte přístup</h1>
      <p className="py-6">Stránka, kterou jste se pokusili načíst vám není přístupná.</p>
    </HeroCenterLayout>
  );
}
