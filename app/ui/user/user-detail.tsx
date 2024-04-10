import DetailRow from '@/app/ui/utils/detail-row';
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
