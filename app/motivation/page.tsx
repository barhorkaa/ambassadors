import MotivationForm from "@/app/ui/motivation/motivation-form";
import React from "react";

export default function UserMotivation() {
  return(
    <div className="hero min-h-max">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left p-4">
          <h1 className="hero-title">Řekněte nám proč jsete se rozhodli propagovat FI</h1>
          <p className="py-6">Tento dotazník slouží pro nás jako ukazatel, proč se studenti FI rozhodnou jít propagovat svojí fakultu. Zároveň vaše ochota vyplnit něco na víc dokazuje, že to chcete brát vážně :)</p>
          <p className="py-6">Zároveň je jej potrebné vyplnit, abyste se programu mohli zúčastnit a přihlašovat se na akce.</p>
        </div>
        <MotivationForm />
      </div>
    </div>
  )
}