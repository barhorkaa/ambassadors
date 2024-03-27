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
        <h3 className="">
          Proč jste se rozhodli k nám přidat?
        </h3>
        <div>
          {params.motivation.why}
        </div>
      </div>
      <div className="p-2">
        <h3 className="">
          Doporučil vám někto přidat se k programu? Pokud ano, kto?
        </h3>
        <div>
          {params.motivation.who}
        </div>
      </div>
      <div className="p-2 bg-amber-100 rounded-md">
        <h3 className="">
          Co byste chtěli jako ambasador dosáhnout?
        </h3>
        <div>
          {params.motivation.goals}
        </div>
      </div>
      <div className="p-2">
        <h3 className="">
          Jakých akcí byste se chtěli převážně zúčastňovat?
        </h3>
        <div>
          {params.motivation.preferred_events}
        </div>
      </div>
      <div className="p-2 bg-amber-100 rounded-md">
        <h3 className="">
          Kolik času budete mít na ambasadorskou činnost?
        </h3>
        <div>
          {params.motivation.time}
        </div>
      </div>
    </>
  )
}