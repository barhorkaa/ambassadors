import { approveReportAction } from '@/app/lib/actions/report';
import ApproveButton from '@/app/ui/button/approve-button';
import CreateReportModal from '@/app/ui/modals/create/create-report-modal';
import ReportDetail from '@/app/ui/report/report-detail';
import { UserRoles } from '@/app/utils/user-roles';
import { auth } from '@/auth';
import { userSignUpForEventStatus } from '@/database/repository/event-user';
import { getEventById } from '@/database/repository/events';
import { getAllMaterials } from '@/database/repository/material';
import { getEventReport } from '@/database/repository/report';
import { EventDetailModel } from '@/models/event-models';
import { MaterialMinModel } from '@/models/material-models';

export default async function Page({ params }: { params: { id: string } }) {
  const eventReport = await getEventReport(params.id);
  const event: EventDetailModel = await getEventById(params.id);

  const materials: MaterialMinModel[] = await getAllMaterials();
  const session = await auth();

  const userStatus = await userSignUpForEventStatus(event.id, session?.user.id!);

  return (
    <div className="data-display">
      <div className="card-body">
        <div className="flex flex-row justify-between items-end">
          <h2 className="card-title">Zpráva z akce</h2>
          {session?.user.role === UserRoles.manager && eventReport && !eventReport.approved && (
            <ApproveButton fun={approveReportAction} id={eventReport.id} />
          )}
        </div>
        {event.deletedAt === null && (
          <>
            {!eventReport ? (
              <div className="w-full h-full flex items-center justify-center">
                {(session?.user.role === UserRoles.manager ||
                  (userStatus !== undefined &&
                    !userStatus.substitute &&
                    userStatus.approved &&
                    (event.date === null || new Date() <= event.date))) && (
                  <CreateReportModal eventId={params.id} materials={materials} />
                )}
              </div>
            ) : (
              <ReportDetail report={eventReport} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
