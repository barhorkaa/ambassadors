'use client';

import PasswordResetForm from '@/app/ui/password/password-reset-form';
import { HeroCenterLayout } from '@/app/ui/utils/component-layouts';
import jwt, { Secret } from 'jsonwebtoken';
import { redirect, useSearchParams } from 'next/navigation';

export default function Page({ params }: { params: { token: string } }) {
  const tokenValid = jwt.verify(params.token, process.env['RESET_TOKEN_SECRET'] as Secret);

  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  if (!tokenValid || !email) redirect('');

  return (
    <HeroCenterLayout title={'Zadejte nové heslo'}>
      <PasswordResetForm email={email} />
    </HeroCenterLayout>
  );
}
