import { UserRoles } from '@/app/utils/user-roles';
import { UserModel } from '@/models/user-models';

export default function UserDetail({ user }: { user: UserModel }) {
  return (
    <div className="flex flex-col">
      <DetailRow label={'Jméno'} value={user.name} />
      <DetailRow label={'E-mail'} value={user.email} />
      <DetailRow label={'Tel. číslo'} value={user.phone_number} />
      <DetailRow label={'UČO'} value={user.uco} />
      <DetailRow label={'Role'} value={user.role === UserRoles.manager ? 'Manažér' : 'Ambasador'} />
      <DetailRow label={'Potvrzen'} value={user.approved ? 'Ano' : 'Ne'} />
      <DetailRow label={'Registrovaný'} value={user.created_at.toLocaleString('cs-CZ')} />
      <DetailRow label={'Aktivní'} value={user.deleted_at ? 'Ne' : 'Ano'} />
    </div>
  );
}

function DetailRow(detail: { label: string; value: string | number }) {
  return (
    <div className="grid grid-cols-3 items-end">
      <p className="font-light">{detail.label}</p>
      <p className="text-lg line-clamp-2 col-span-2">{detail.value}</p>
      <hr className="w-full h-0.5 text-black col-span-3 m-1 bg-base-300" />
    </div>
  );
}
