import UserInfo from '@/app/ui/info/users-info';
import ModalLayout from '@/app/ui/modals/modal-layout';

export default function InfoUsersModal() {
  return (
    <ModalLayout id="usersInfoModal" title="Uživatelé" modalType="info">
      <UserInfo />
    </ModalLayout>
  );
}
