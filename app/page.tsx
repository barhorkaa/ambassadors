import Banner from '@/app/ui/main-page/banner';
import FAQ from '@/app/ui/main-page/faq';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex space-y-4 min-h-screen flex-col items-start">
      <Banner />
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <Image
            src={'https://fadmin.fi.muni.cz/noauth/gallery_data/fi_udalosti/01300314.032.cust.jpg'}
            className="lg:max-w-sm rounded-lg shadow-xl"
            alt="Ambassador at AI 4 Talents"
            width={500}
            height={500}
          />
          <div>
            <h2 className="">Ambasadorský program Fakulty&nbsp;informatiky&nbsp;MU</h2>
            <p className="text-lg py-6">
              Ambasadorský program již po léta zviditelňuje Fakultu informatiky prostřednictvím návštěv na středních
              školách, organizace Dnů otevřených dveří a účasti na veletrzích, jako jsou Gaudeamus nebo Kam na vysokú
              Roadshow. Naši ambasadoři na těchto akcích reprezentují fakultu a komunikací se zájemci o studium sdílejí
              své zkušenosti. Za svou práci jsou samozřejmě adekvátně odměňováni.
            </p>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <Image
            src={'https://fadmin.fi.muni.cz/noauth/gallery_data/fi_udalosti/01300315.008.cust.jpg'}
            className="lg:max-w-sm rounded-lg shadow-xl"
            alt={'Ambassador at Gaudeamus'}
            width={500}
            height={500}
          />
          <div>
            <h2>Jako ambasador se dostaneš na různá místa</h2>
            <p className="text-lg py-6">
              Ambasadoři mají možnost se přihlásit na akce organizované jak FI MU tak i rektoríátem samotným. Na těchto
              akcích nebude žádná tíha organizace na jejich bedrech. Stačí se ukázat a splnit si poviinosti, které jsou
              zadány.
            </p>
            <p className="text-lg">
              Ktom těchto akcí ale ambasador může také jít na svou (nebo jinou) střední školu! Tato iniciativa ale musí
              přijít od samotného ambasadora. Nebudete v tom ale sami, my vám pomůžeme, vybavíme vás předměty a
              materiály a odpovíme na všechny případné dotazy.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="hero">
        <div className="hero-content text-center">
          <div className="">
            <h2 className="">Zaujal tě Ambasadorský program?</h2>
            <p className="py-6">Staň se i ty ambasadorem FI a pomoz nám představit fakultu široké veřejnosti!</p>
            <button className="btn">
              <Link href={'/register'}>Registovat</Link>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <Image
            src={'https://fadmin.fi.muni.cz/noauth/gallery_data/fi_udalosti/01300319.027.cust.jpg'}
            className="h-fit lg:max-w-md rounded-lg shadow-xl"
            alt={'Ambassadors at Open Day panel discussion'}
            width={500}
            height={500}
          />
          <div>
            <h2 className="pb-4">Časté otázky</h2>
            <FAQ />
          </div>
        </div>
      </div>
      <hr />
      <div className="w-full text-center py-6">
        <h2 className="text-5xl">Těšíme se na tebe!</h2>
      </div>
    </div>
  );
}
