import { DetailRowVertical } from '@/app/ui/utils/data-display';
import { MotivationModel } from '@/models/motivation-models';

interface MotivationDetailProps {
  motivation: MotivationModel | undefined;
}

export default function MotivationDetail({ motivation }: MotivationDetailProps) {
  if (motivation === undefined) {
    return <p className="text-lg">Užiatel zatím nevyplnil motivační formulář</p>;
  }

  return (
    <div className="flex flex-col">
      <div className="pb-4">
        <DetailRowVertical label={'Proč jste se rozhodli k nám přidat?'} value={motivation.why} />
      </div>
      <div className="pb-4">
        <DetailRowVertical label={'Doporučil vám někto přidat se k programu? Pokud ano, kto?'} value={motivation.who} />
      </div>
      <div className="pb-4">
        <DetailRowVertical label={'Co byste chtěli jako ambasador dosáhnout?'} value={motivation.goals} />
      </div>
      <div className="pb-4">
        <DetailRowVertical
          label={'Jakých akcí byste se chtěli převážně zúčastňovat?'}
          value={motivation.preferredEvents}
        />
      </div>
      <div className="pb-4">
        <DetailRowVertical label={'Kolik času budete mít na ambasadorskou činnost?'} value={motivation.time} />
      </div>
    </div>
  );
}
