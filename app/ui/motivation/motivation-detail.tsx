import DetailRowVertical from '@/app/ui/utils/data-display';
import { MotivationModel } from '@/models/motivation-models';

export default function MotivationDetail(params: { motivation: MotivationModel | undefined }) {
  if (params.motivation === undefined) {
    return <p className="text-lg">Užiatel zatím nevyplnil motivační formulář</p>;
  }

  return (
    <div className="flex flex-col">
      <div className="pb-4">
        <DetailRowVertical label={'Proč jste se rozhodli k nám přidat?'} value={params.motivation.why} />
      </div>
      <div className="pb-4">
        <DetailRowVertical
          label={'Doporučil vám někto přidat se k programu? Pokud ano, kto?'}
          value={params.motivation.who}
        />
      </div>
      <div className="pb-4">
        <DetailRowVertical label={'Co byste chtěli jako ambasador dosáhnout?'} value={params.motivation.goals} />
      </div>
      <div className="pb-4">
        <DetailRowVertical
          label={'Jakých akcí byste se chtěli převážně zúčastňovat?'}
          value={params.motivation.preferredEvents}
        />
      </div>
      <div className="pb-4">
        <DetailRowVertical label={'Kolik času budete mít na ambasadorskou činnost?'} value={params.motivation.time} />
      </div>
    </div>
  );
}
