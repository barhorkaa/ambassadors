import EmailSkeleton from '@/emails/utils/email-skeleton';
import { Heading, Link, Text } from '@react-email/components';

const HelloTemplate = () => (
  <EmailSkeleton title={'Vítejte v ambasadorském programu FI MU!'} preview={'Vítejte mezi námi'}>
    <Text>
      Tento e-mail jste obrdželi jelikož jste se registrovali v aplikaci AmbassadorsFIMU a váš účet byl úspěsně
      potvzren. Nyní můžete aplikaci využívat v jejím plném rozsahu. Jsme rádi že jste se k nám přidali a těšíme se na
      spolupráci.
    </Text>
    <Heading as="h2">Proč nová aplikace?</Heading>
    <Text>
      Aplikace združuje agendu potřebnou pro úspěšné absolvonání výjezdů a akcí vrámci ambasadorského programu FI. V
      předchozích letech se program řešil přes Google dokmenty a byl trocha matoucí pro všechny zúčastněné. Snažili jsme
      se proto mu dát novou formu, která by program posunula dál a usnaznila práci jak vám, ambasadorům, tak i
      zaměstnancům propagace.
    </Text>
    <Text>
      Na aplikaci pořád pracujeme a oceníme vaší zpětnou vazbu nebo bug reporty pomocí{' '}
      <Link href={'https://forms.gle/FPap6vfQHVPzo6xD6'}>formuláře</Link>. Zde můžete popsat svoje problémy s aplikací a
      my se je pokusíme co nejdřiv vyřešit.
    </Text>
    <Heading as="h2">Co v aplikaci najdu?</Heading>
    <Heading as="h3">Akce</Heading>
    <Text>Různé akce kterých se můžete zúčastnit. ...</Text>
    <Heading as="h3">Materiály / Propagační předměty</Heading>
    <Text>Materiály, které ssebou můžete vzít na akci. ...</Text>
    <Heading as="h3">Druhy akcí</Heading>
    <Text>Různé druhy akcí kterých se můžete zúčastnit. ...</Text>
    <Heading as="h3">Osobni informace a notifikační preference</Heading>
    <Text>
      Můžete spravovat svoje osobní údaje a nastavit si prefence o jakém dění v aplikaci chcete být informováni. ...
    </Text>
    <Heading as="h2">Jak začít?</Heading>
    <Text>
      V aplikaci najdete akce na ktré se můžete přihlásit a pomáhat. Nevidíte akci, na kterou byste chtěli jet? Nevadí,
      můžete vytvořit svou vlastní. Tuto akci posléze zkotrolují zaměstnanci propagace a jestli jim přijde v pořádku,
      tak po jejím scháléní se na ní budte moct přihlásit.
    </Text>
    <Text>Jednoduché, že?</Text>
  </EmailSkeleton>
);

export default HelloTemplate;
