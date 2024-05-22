import DetailRowVertical from '@/app/ui/utils/data-display';
import { ReportDetailModel } from '@/models/report-models';

export default function ReportDetail({ report }: { report: ReportDetailModel }) {
  return (
    <>
      <DetailRowVertical label={'Kolik bylo na akci lidí?'} value={report.numberOfAttendees} />
      <p className="font-light text-sm">Materiály použité na akci</p>
      {report.materials.map((materialAmount) => (
        <MaterialAmount
          key={materialAmount.materialId}
          material={materialAmount.materialName!}
          amount={materialAmount.amount}
        />
      ))}
      <hr className="w-full h-0.5 my-1 bg-base-300" />
      <DetailRowVertical label={'Co se na akci dělo?'} value={report.notes} />
      <DetailRowVertical label={'Co do přístě zlepšit?'} value={report.ideas} />
    </>
  );
}

function MaterialAmount({ material, amount }: { material: string; amount: number }) {
  return (
    <div className="grid grid-cols-2">
      <p className="col-start-1 text-lg">{material}</p>
      <p className="col-start-2 text-lg">{amount}</p>
    </div>
  );
}
