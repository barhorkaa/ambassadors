import { UserModel } from '@/models/userModel';

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

export function DetailRow(params: { label: string; value: string | number }) {
  return (
    <div>
      <div className="p-2 flex flex-row justify-between">
        <h3>{params.label}</h3>
        <h4 className="ml-16">{params.value}</h4>
      </div>
      <hr />
    </div>
  );
}
