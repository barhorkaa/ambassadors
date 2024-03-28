import Link from "next/link";
import {signOut} from "@/auth";

export default function Success(){
  return(
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Váš motivační dotazník byl úspešně zaslán!</h1>
          <p className="py-6">Nyní se odhlaste aby se změny projevili. Po přihlášení uvidíte v aplikaci další kroky.</p>
          <form action={async () => {
            'use server';
            await signOut();
          }}>
            <button className="btn bg-amber-300" >Odhlásit se</button>
          </form>
        </div>
      </div>
    </div>
  )
}