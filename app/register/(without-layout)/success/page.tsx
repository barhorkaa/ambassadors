import Link from 'next/link';

export default function Success() {
  return (
    <div className="page hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="hero-title">Vaše registrace se zdařila!</h1>
          <p className="py-6">
            Nyní se přihlaste a v aplikaci vyplňte motivační dotazník. Poté vaši registraci zchválí někdo z našich
            manažerů a budete se moct začín plně věnovat svým ambasadorským povinnostem.
          </p>
          <Link href={'/login'}>
            <button className="btn">Přihlásit se</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
