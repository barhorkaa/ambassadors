import { DetailRowHorizontal } from '@/app/ui/utils/detail-row';
import { UserRoles } from '@/app/utils/user-roles';
import { UserModel } from '@/models/user-models';

export default function UserDetail({ user }: { user: UserModel }) {
  return (
    <div className="flex flex-col">
      <DetailRowHorizontal label={'Jméno'} value={user.name} />
      <DetailRowHorizontal label={'E-mail'} value={user.email} />
      <DetailRowHorizontal label={'Tel. číslo'} value={user.phone_number} />
      <DetailRowHorizontal label={'UČO'} value={user.uco} />
      <DetailRowHorizontal label={'Role'} value={user.role === UserRoles.manager ? 'Manažér' : 'Ambasador'} />
      <DetailRowHorizontal label={'Potvrzen'} value={user.approved ? 'Ano' : 'Ne'} />
      <DetailRowHorizontal label={'Registrovaný'} value={user.created_at.toLocaleString('cs-CZ')} />
      <DetailRowHorizontal label={'Aktivní'} value={user.deleted_at ? 'Ne' : 'Ano'} />
    </div>
  );
}
