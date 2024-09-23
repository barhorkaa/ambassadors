import PasswordEditForm from '@/app/ui/password/password-edit-form';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Form() {
  const session = await auth();
  if (!session) redirect('/');

  return (
    <div className="card">
      <PasswordEditForm reset={false} userId={session.user.id} />
    </div>
  );
}
