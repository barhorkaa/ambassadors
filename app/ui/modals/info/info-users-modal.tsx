import UserInfo, { AmbassadorsInfo, ManagersInfo, UnapprovedInfo } from '@/app/ui/info/users-info';
import ModalLayout from '@/app/ui/modals/modal-layout';

type PartialInfoType = 'unapproved' | 'ambassadors' | 'managers';

type PartialUserInfoRecord = Record<PartialInfoType, React.ReactNode>;

const partialModalContent: PartialUserInfoRecord = {
  unapproved: <UnapprovedInfo />,
  ambassadors: <AmbassadorsInfo />,
  managers: <ManagersInfo />,
};

export default function InfoUsersModal() {
  return (
    <ModalLayout id="usersInfoModal" title="Uživatelé" modalType="info">
      <UserInfo />
    </ModalLayout>
  );
}

export function InfoPartialUserInfoModal({ type }: { type: PartialInfoType }) {
  return (
    <ModalLayout id={type} title="" modalType="info">
      {partialModalContent[type]}
    </ModalLayout>
  );
}
