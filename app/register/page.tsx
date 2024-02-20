import React from "react";
import RegisterForm from "@/app/ui/register-form";

export default function Register() {
  return(
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left p-4">
          <h1 className="text-5xl font-bold">Přidejte se k nám a dělejte FI dobré jméno!</h1>
          <p className="py-6">Po přihlášení budete míť přístup ke všem akcím a možnost se na přihlásit. Pojďte s námi představit Fakultu informatiky Masarykovy Univerzity světu!</p>
        </div>
        <RegisterForm/>
      </div>
    </div>
  )
}