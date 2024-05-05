import { auth } from '@/auth';
import { permanentRedirect } from 'next/navigation';

export default async function Me() {
  const session = await auth();

  permanentRedirect(`/ambassadors/${session?.user.id!}`);
}
