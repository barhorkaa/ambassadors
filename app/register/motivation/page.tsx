import React from "react";
import RegisterMotivationForm from "@/app/ui/register-motivation-form";

export default function RegisterMotivation() {

  return (
    <div className="hero min-h-max">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left p-4">
          <h1 className="text-5xl font-bold">Řekněte nám proč jsete se rozhodli propagovat FI</h1>
          <p className="py-6">Tento dotazník slouží pro nás jako ukazatel, proč se studenti FI rozhodnou jít propagovat svojí fakultu. Zároveň vaše ochota vyplnit něco na víc dokazuje, že to chcete brát vážně :)</p>
        </div>
        <RegisterMotivationForm/>
      </div>
    </div>
  )
}