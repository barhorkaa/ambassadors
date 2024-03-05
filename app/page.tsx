import React from "react";
import FAQ from "@/app/ui/main-page/faq";
import Carousel from "@/app/ui/main-page/carousel";

export default function Home() {
  return (
    <main className="flex space-y-4 min-h-screen flex-col items-start">
      <Carousel />
      <h1 className="font-bold text-4xl">Ambasadorský program Fakulty Informatiky MU</h1>
      <h2 className="font-bold text-lg">Staň se i ty ambasadorem FI a pomoz nám představit fakultu široké veřejnosti!</h2>
      <h2 className="font-bold text-lg">Časté otázky</h2>
      <FAQ/>
    </main>
  )
}
