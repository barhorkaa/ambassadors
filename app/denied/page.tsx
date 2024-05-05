import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Unsuccessful() {
  const session = await auth();
  if (!session) {
    redirect('/');
  }

  if (session.user.approved) {
    redirect('/events');
  }
  return (
    <div>Your account has not been verified yet, please wait until one of our managers verifies your registration</div>
  );
}
