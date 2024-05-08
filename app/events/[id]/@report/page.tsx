import CreateReportModal from '@/app/ui/modals/create/create-report-modal';
import { getAllMaterials } from '@/database/repository/material';
import { MaterialMinModel } from '@/models/material-models';

export default async function ReportPage({ params }: { params: { id: string } }) {
  const eventReport = false;

  const materials: MaterialMinModel[] = await getAllMaterials();

  return (
    <div className="card shadow-md rounded-none">
      <div className="card-body">
        <h2 className="card-title">Zpráva z akce</h2>

        {!eventReport ? (
          <div className="w-full h-full flex items-center justify-center">
            <CreateReportModal eventId={params.id} materials={materials} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {/*<h1>hello</h1>*/}
    </div>
  );
}
