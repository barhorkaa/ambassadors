'use client';

import ModalLayout from '@/app/ui/modals/modal-layout';
import NotificationsEditForm from '@/app/ui/notifications/notification-edit-form';
import { ManagerNotifications, UserNotifications } from '@/models/notifications-models';

export default function EditNotificationsModal({
  notifications,
  managerNotifications,
}: {
  notifications: UserNotifications;
  managerNotifications: ManagerNotifications | undefined;
}) {
  return (
    <ModalLayout
      id={'notifications_' + notifications!.userId}
      title={'Upravit preference upozornění'}
      modalType={'notifications'}
    >
      <NotificationsEditForm managerNotifications={managerNotifications} notifications={notifications} />
    </ModalLayout>
  );
}
