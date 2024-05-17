import { UserRoles } from '@/app/utils/user-roles';
import { auth } from '@/auth';
import { getEventById } from '@/database/repository/events';
import { EventDetailModel } from '@/models/event-models';
import { redirect } from 'next/navigation';

export default async function Event({ params }: { params: { id: string } }) {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }
  const event: EventDetailModel = await getEventById(params.id);
  if (event.deletedAt !== null && session.user.role !== UserRoles.manager) {
    redirect('/denied/role');
  }

  return null;
}
