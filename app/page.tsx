import Banner from '@/app/ui/main-page/banner';
import FAQ from '@/app/ui/main-page/faq';
import { HeroCenterLayout } from '@/app/ui/utils/component-layouts';
import Image from 'next/image';

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
            <h2>Ambasadorský program Fakulty&nbsp;informatiky&nbsp;MU</h2>
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
            <h2>Ambasadorům se otevírá mnoho možností</h2>
            <p className="text-lg py-6">
              Ambasadoři se mohou přihlásit na akce organizované FI MU nebo přímo rektorátem. Nemusí se starat o
              organizaci – stačí přijít a splnit stanovené úkoly.
            </p>
            <p className="text-lg">
              Kromě toho se mohou ambasadoři podívat na svou (nebo jinou) střední školu a prezentovat FI MU sami. Tato
              iniciativa ale musí vzejít přímo od ambasadora a vyžaduje vlastní organizaci. Od nás dostanou všechny
              potřebné materiály, tiskoviny, merch a také plnou podporu pro zodpovězení jakýchkoli dotazů.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <HeroCenterLayout title={''} url={'/register'} buttonTitle={'Registrovat se'}>
        <h2>Zaujal tě Ambasadorský program?</h2>
        <p className="py-6">Staň se součástí našeho týmu a pomoz nám představit fakultu široké veřejnosti.</p>
      </HeroCenterLayout>
      <hr />
      <div className="hero" id={'faq'}>
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
      <div className="w-full text-center py-6" id={'contacts'}>
        <p>
          V případě dalších dotazů či nejasností neváhej kontaktovat Oddělení vnějších vztahů a spolupráce s partnery FI
          MU na e-mailu:
        </p>
        <p className="underline">
          <a href="mailto:propagace@fi.muni.cz">propagace@fi.muni.cz</a>
        </p>
      </div>
      <hr />
      <div className="w-full text-center py-6">
        <h2 className="text-5xl">Těšíme se na tebe!</h2>
      </div>
    </div>
  );
}
