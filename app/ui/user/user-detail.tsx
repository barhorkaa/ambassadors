import { UserModel } from '@/models/user-models';

export default function UserDetail(params: { user: UserModel }) {
  return (
    <div className="flex flex-col">
      <DetailRow label={'Jméno'} value={params.user.name} />
      <DetailRow label={'E-mail'} value={params.user.email} />
      <DetailRow label={'Tel. číslo'} value={params.user.phone_number} />
      <DetailRow label={'UČO'} value={params.user.uco} />
      <DetailRow label={'Role'} value={params.user.role} />
      <DetailRow label={'Potvrzen'} value={params.user.approved ? 'Ano' : 'Ne'} />
      <DetailRow label={'Registrovaný'} value={params.user.created_at.toLocaleString()} />
      <DetailRow label={'Aktivní'} value={params.user.deleted_at ? 'Ne' : 'Ano'} />
    </div>
  );
}

function DetailRow(detail: { label: string; value: string | number }) {
  return (
    <div className="grid grid-cols-2 items-end">
      <p className="font-light">{detail.label}</p>
      <p className="text-xl">{detail.value}</p>
      <hr className="w-full h-0.5 text-black col-span-2 m-1 bg-base-300" />
    </div>
  );
}
