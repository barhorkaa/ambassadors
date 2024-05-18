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

function DetailRowHorizontal(detail: { label: string; value: string | number }) {
  return (
    <div className="grid grid-cols-3 items-end">
      <p className="font-light">{detail.label}</p>
      <p className="text-lg line-clamp-2 col-span-2">{detail.value}</p>
      <hr className="w-full h-0.5 text-black col-span-3 m-1 bg-base-300" />
    </div>
  );
}
