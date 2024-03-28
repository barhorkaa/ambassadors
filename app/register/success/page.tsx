import Link from "next/link";

export default function Success(){
  return(
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Vaše registrace se zdařila!</h1>
          <p className="py-6">Nyní se přihlaste a v aplikaci vyplňte motivační dotazník. Poté vaši registraci zchválí někdo z našich manažerů a se budete moct začín plně věnovat svým ambasadorským povinnostem.</p>
          <Link className="btn bg-amber-300"  href={"/login"}>Prihlásit se</Link>
        </div>
      </div>
    </div>
  )
}