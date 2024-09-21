import PasswordResetForm from '@/app/ui/password/password-reset-form';
import { HeroCenterLayout } from '@/app/ui/utils/component-layouts';
import jwt from 'jsonwebtoken';
import { redirect } from 'next/navigation';

export default function Page({ params }: { params: { token: string } }) {
  const secret = process.env['RESET_TOKEN_SECRET'];
  if (secret === undefined) redirect('/');

  const decoded = jwt.verify(params.token, secret);

  return (
    <HeroCenterLayout title={'Zadejte nové heslo'}>
      <PasswordResetForm email={'barculka1.3@gmail.com'} />
    </HeroCenterLayout>
  );
}
