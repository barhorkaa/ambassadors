import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

interface VerificationTemplateProps {
  username?: string;
}

const HelloTemplate = ({ username }: VerificationTemplateProps) => (
  <Html>
    <Head>
      <Font
        fontFamily="Roboto"
        fallbackFontFamily="Verdana"
        webFont={{
          url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
          format: 'woff2',
        }}
        fontWeight={400}
        fontStyle="normal"
      />
    </Head>
    <Preview>[Ambasadorský program] Vítejte mezi námi</Preview>
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: '#007291',
            },
          },
        },
      }}
    >
      <Body>
        <Container className="shadow-xl content-center bg-base-100 pt-0">
          <Heading as="h1" className="bg-[#F2D45C] p-4">
            Vítejte v ambasadorském programu FI MU!
          </Heading>
          <Section className="px-4">
            <Text>
              Tento e-mail jste obrdželi jelikož jste se registrovali v aplikaci AmbassadorsFIMU a váš účet byl úspěsně
              potvzren. Nyní můžete aplikaci využívat v jejím plném rozsahu. Jsme rádi že jste se k nám přidali a těšíme
              se na spolupráci.
            </Text>
            <Heading as="h2">Proč nová aplikace?</Heading>
            <Text>
              Aplikace združuje agendu potřebnou pro úspěšné absolvonání výjezdů a akcí vrámci ambasadorského programu
              FI. V předchozích letech se program řešil přes Google dokmenty a byl trocha matoucí pro všechny
              zúčastněné. Snažili jsme se proto mu dát novou formu, která by program posunula dál a usnaznila práci jak
              vám, ambasadorům, tak i zaměstnancům propagace.
            </Text>
            <Text>
              Na aplikaci pořád pracujeme a oceníme vaší zpětnou vazbu nebo bug reporty pomocí{' '}
              <Link href={''}>formuláře</Link>. Zde můžete popsat svoje problémy s aplikací a my se je pokusíme co
              nejdřiv vyřešit.
            </Text>
            <Heading as="h2">Co v aplikaci najdu?</Heading>
            <Heading as="h3">Akce</Heading>
            <Text>Různé akce kterých se můžete zúčastnit.</Text>
            <Heading as="h3">Materiály / Propagační předměty</Heading>
            <Text>Různé akce kterých se můžete zúčastnit.</Text>
            <Heading as="h3">Druhy akcí</Heading>
            <Text>Různé akce kterých se můžete zúčastnit.</Text>
            <Heading as="h3">Osobni informace a notifikační preference</Heading>
            <Text>Různé akce kterých se můžete zúčastnit.</Text>
            <Heading as="h2">Jak začít?</Heading>
            <Text>
              V aplikaci najdete akce na ktré se můžete přihlásit a pomáhat. Nevidíte akci, na kterou byste chtěli jet?
              Nevadí, můžete vytvořit svou vlastní. Tuto akci posléze zkotrolují zaměstnanci propagace a jestli jim
              přijde v pořádku, tak po jejím scháléní se na ní budte moct přihlásit.
            </Text>
            <Text>Jednoduché, že?</Text>
          </Section>
          <Section></Section>
          <Hr />
          <Text>blaaaaaaaaaaaaaaaaaa in the footer.</Text>
        </Container>{' '}
      </Body>
    </Tailwind>
  </Html>
);

export default HelloTemplate;
