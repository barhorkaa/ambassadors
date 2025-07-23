import { auth } from '@/auth';
import { permanentRedirect } from 'next/navigation';

export default async function Page() {
  const session = await auth();

  permanentRedirect(`/ambassadors/${session?.user.id!}/detail`);
}
