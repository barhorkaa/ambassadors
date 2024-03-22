import {MotivationModel} from "@/models/motivation/motivation-model";

export default function MotivationDetail(params : {motivation: MotivationModel | undefined}) {
  if (params.motivation === undefined) {
    return (
      <>
        the user is not motivated
      </>
    )
  }

  return(
    <>
      <div className="p-2 bg-amber-100 rounded-md">
        <h2 className="font-bold font-lg">
          Proč jste se rozhodli k nám přidat?
        </h2>
        <div>
          {params.motivation.why}
        </div>
      </div>
      <div className="p-2">
        <h2 className="font-bold font-lg">
          Doporučil vám někto přidat se k programu? Pokud ano, kto?
        </h2>
        <div>
          {params.motivation.who}
        </div>
      </div>
      <div className="p-2 bg-amber-100 rounded-md">
        <h2 className="font-bold font-lg">
          Co byste chtěli jako ambasador dosáhnout?
        </h2>
        <div>
          {params.motivation.goals}
        </div>
      </div>
      <div className="p-2">
        <h2 className="font-bold font-lg">
          Jakých akcí byste se chtěli převážně zúčastňovat?
        </h2>
        <div>
          {params.motivation.preferred_events}
        </div>
      </div>
      <div className="p-2 bg-amber-100 rounded-md">
        <h2 className="font-bold font-lg">
          Kolik času budete mít na ambasadorskou činnost?
        </h2>
        <div>
          {params.motivation.time}
        </div>
      </div>
    </>
  )
}