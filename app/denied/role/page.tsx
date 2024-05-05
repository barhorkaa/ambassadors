import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function DeniedRole() {
  const session = await auth();
  if (!session) {
    redirect('/');
  }
  return <div>You dont have access to this page since you are not a manager</div>;
}
