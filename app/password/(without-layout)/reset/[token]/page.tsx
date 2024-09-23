import PasswordEditForm from '@/app/ui/password/password-edit-form';
import { HeroCenterLayout } from '@/app/ui/utils/component-layouts';
import jwt from 'jsonwebtoken';
import { redirect } from 'next/navigation';

type JWTDecoded = {
  id: string;
  iat: number;
  exp: number;
};

export default function Page({ params }: { params: { token: string } }) {
  const secret = process.env['RESET_TOKEN_SECRET'];
  if (secret === undefined) redirect('/');
  let userId: JWTDecoded | undefined = undefined;

  try {
    console.log('token is: ', params.token);
    const decoded = jwt.verify(params.token, secret);

    if (typeof decoded !== 'string') userId = decoded as JWTDecoded;
  } catch (e) {
    console.log(e);
    throw e;
  }

  return (
    <HeroCenterLayout title={'Zadejte nové heslo'}>
      <PasswordEditForm reset={true} userId={userId!.id} />
    </HeroCenterLayout>
  );
}
