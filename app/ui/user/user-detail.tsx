import { DetailRowHorizontal } from '@/app/ui/utils/data-display';
import { UserRoles } from '@/app/utils/user-roles';
import { auth } from '@/auth';
import { UserModel } from '@/models/user-models';

interface UserDetailProps {
  user: UserModel;
}

export default async function UserDetail({ user }: UserDetailProps) {
  const session = await auth();

  return (
    <div className="flex flex-col">
      <DetailRowHorizontal label={'Jméno'} value={user.name} />
      <DetailRowHorizontal label={'E-mail'} value={user.email} />
      <DetailRowHorizontal label={'Tel. číslo'} value={user.phone_number} />
      <DetailRowHorizontal label={'UČO'} value={user.uco} />
      <DetailRowHorizontal label={'Role'} value={user.role === UserRoles.manager ? 'Manažér' : 'Ambasador'} />
      <DetailRowHorizontal label={'Potvrzen'} value={user.approved ? 'Ano' : 'Ne'} />
      {session?.user.role === UserRoles.manager && (
        <>
          <DetailRowHorizontal label={'Registrovaný'} value={user.created_at.toLocaleString('cs-CZ')} />
          <DetailRowHorizontal label={'Aktivní'} value={user.deleted_at ? 'Ne' : 'Ano'} />
        </>
      )}
    </div>
  );
}
