import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Event({ params }: { params: { id: string } }) {
  const session = await auth();
  if (!session) {
    redirect('/login');
  }

  return null;
}
