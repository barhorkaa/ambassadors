import CreateReportModal from '@/app/ui/modals/create/create-report-modal';
import ReportDetail from '@/app/ui/report/report-detail';
import { getAllMaterials } from '@/database/repository/material';
import { getEventReport } from '@/database/repository/report';
import { MaterialMinModel } from '@/models/material-models';

export default async function ReportPage({ params }: { params: { id: string } }) {
  const eventReport = await getEventReport(params.id);

  const materials: MaterialMinModel[] = await getAllMaterials();

  return (
    <div className="data-display">
      <div className="card-body">
        <h2 className="card-title">Zpráva z akce</h2>

        {!eventReport ? (
          <div className="w-full h-full flex items-center justify-center">
            <CreateReportModal eventId={params.id} materials={materials} />
          </div>
        ) : (
          <ReportDetail report={eventReport} />
        )}
      </div>
    </div>
  );
}
