import Banner from '@/app/ui/main-page/banner';
import FAQ from '@/app/ui/main-page/faq';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex space-y-4 min-h-screen flex-col items-start">
      {/*<Carousel />*/}
      <Banner />
      {/*<div className="flex flex-row sm:flex-col py-4">*/}
      {/*  <div className="w-1/2 sm:w-full">*/}
      {/*    <h2>Ambasadorský program Fakulty&nbsp;Informatiky&nbsp;MU</h2>*/}
      {/*    <p className="text-lg py-4">*/}
      {/*      Ambasadorský program již po dlouhá léta zviditelňuje Fakultu Informatiky v očích veřejnosti prostřednictvím*/}
      {/*      výjezdů na střední školy, organizací Dní otevřeých dveří nebo taky účastí na veltrzích jako je Gaudeamus*/}
      {/*      nebo Kam na vysokú Roadshow. Naši ambasadoři na akci reprezentují svoji fakultu a komunikací s uchazeči o*/}
      {/*      studium sdílejí své zkušenosti, radosti i staroti. Všechno samozřejmě se správnou kompenzacií jejich času!*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*  <img*/}
      {/*    className="mask mask-squircle w-1/2 sm:w-full"*/}
      {/*    src="https://fadmin.fi.muni.cz/noauth/gallery_data/fi_udalosti/01300314.032.cust.jpg"*/}
      {/*    alt="AI 4 talets"*/}
      {/*  />*/}
      {/*</div>*/}
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://fadmin.fi.muni.cz/noauth/gallery_data/fi_udalosti/01300314.032.cust.jpg"
            className="lg:max-w-sm rounded-lg shadow-xl"
          />
          <div>
            <h2 className="">Ambasadorský program Fakulty&nbsp;Informatiky&nbsp;MU</h2>
            <p className="text-lg py-6">
              Ambasadorský program již po dlouhá léta zviditelňuje Fakultu Informatiky v očích veřejnosti
              prostřednictvím výjezdů na střední školy, organizací Dní otevřeých dveří nebo taky účastí na veltrzích
              jako je Gaudeamus nebo Kam na vysokú Roadshow. Naši ambasadoři na akci reprezentují svoji fakultu a
              komunikací s uchazeči o studium sdílejí své zkušenosti, radosti i staroti. Všechno samozřejmě se správnou
              kompenzacií jejich času!
            </p>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://fadmin.fi.muni.cz/noauth/gallery_data/fi_udalosti/01300315.008.cust.jpg"
            className="lg:max-w-sm rounded-lg shadow-xl"
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
      {/*<div className="flex flex-col">*/}
      {/*  <h2>Zaujal tě Ambasadorský propgram a chtěl byses přidat?</h2>*/}
      {/*  <p className="text-lg">Zaregistruj se ještě dnes!</p>*/}
      {/*  <button>*/}
      {/*    <Link href={'/login'}>Registovat</Link>*/}
      {/*  </button>*/}
      {/*</div>*/}
      <div className="hero">
        <div className="hero-content text-center">
          <div className="">
            <h2 className="">Zaujal tě Ambasadorský program?</h2>
            <p className="py-6">Staň se i ty ambasadorem FI a pomoz nám představit fakultu široké veřejnosti!</p>
            <button>
              <Link href={'/register'}>Registovat</Link>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-6">
        <h2 className="pb-4">Časté otázky</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-between ">
          <FAQ />
          <img
            src="https://fadmin.fi.muni.cz/noauth/gallery_data/fi_udalosti/01300319.027.cust.jpg"
            className="h-fit lg:max-w-md rounded-lg shadow-xl"
          />
        </div>
      </div>
      <hr />
      <div className="w-full text-center py-6">
        <h2 className="text-5xl">Těšíme se na tebe!</h2>
      </div>
    </div>
  );
}
