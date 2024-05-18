import { UserRoles } from '@/app/utils/user-roles';
import { UserModel } from '@/models/user-models';

export default function UserDetail(params: { user: UserModel }) {
  return (
    <div className="flex flex-col">
      <DetailRow label={'Jméno'} value={params.user.name} />
      <DetailRow label={'E-mail'} value={params.user.email} />
      <DetailRow label={'Tel. číslo'} value={params.user.phone_number} />
      <DetailRow label={'UČO'} value={params.user.uco} />
      <DetailRow label={'Role'} value={params.user.role === UserRoles.manager ? 'Manažér' : 'Ambasador'} />
      <DetailRow label={'Potvrzen'} value={params.user.approved ? 'Ano' : 'Ne'} />
      <DetailRow label={'Registrovaný'} value={params.user.created_at.toLocaleString('cs-CZ')} />
      <DetailRow label={'Aktivní'} value={params.user.deleted_at ? 'Ne' : 'Ano'} />
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
