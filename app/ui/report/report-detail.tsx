import DetailRowVertical from '@/app/ui/utils/detail-row';
import { ReportDetailModel } from '@/models/report-models';

export default function ReportDetail({ report }: { report: ReportDetailModel }) {
  const materials = [...report.materials];
  return (
    <div>
      <DetailRowVertical label={'Kolik bylo na akci lidí?'} value={report.numberOfAttendees} />
      <DetailRowVertical label={'Co se na akci dělo?'} value={report.notes} />
      <DetailRowVertical label={'Co do přístě zlepšit?'} value={report.ideas} />
      <p className="font-light text-sm">Materiály</p>
      {report.materials.map((materialAmount) => (
        <MaterialAmount
          key={materialAmount.materialId}
          material={materialAmount.materialName!}
          amount={materialAmount.amount}
        />
      ))}
    </div>
  );
}

function MaterialAmount({ material, amount }: { material: string; amount: number }) {
  return (
    <div className="grid grid-cols-2">
      <p className="col-start-1">{material}</p>
      <p className="col-start-2">{amount}</p>
    </div>
  );
}
