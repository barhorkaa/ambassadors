import User from '@/app/ambassadors/[id]/page';
import { auth } from '@/auth';

export default async function Me() {
  const session = await auth();

  return <User params={{ id: session?.user.id! }} />;
}
