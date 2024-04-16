import DetailRow from '@/app/ui/utils/detail-row';
import { MotivationModel } from '@/models/motivation/motivation-model';

export default function MotivationDetail(params: { motivation: MotivationModel | undefined }) {
  if (params.motivation === undefined) {
    return <>the user is not motivated</>;
  }

  return (
    <div className="flex flex-col">
      <div className="pb-4">
        <DetailRow label={'Proč jste se rozhodli k nám přidat?'} value={params.motivation.why} />
      </div>
      <div className="pb-4">
        <DetailRow label={'Doporučil vám někto přidat se k programu? Pokud ano, kto?'} value={params.motivation.who} />
      </div>
      <div className="pb-4">
        <DetailRow label={'Co byste chtěli jako ambasador dosáhnout?'} value={params.motivation.goals} />
      </div>
      <div className="pb-4">
        <DetailRow
          label={'Jakých akcí byste se chtěli převážně zúčastňovat?'}
          value={params.motivation.preferred_events}
        />
      </div>
      <div className="pb-4">
        <DetailRow label={'Kolik času budete mít na ambasadorskou činnost?'} value={params.motivation.time} />
      </div>
    </div>
  );
}
