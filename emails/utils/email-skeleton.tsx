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

interface EmailSkeletonProps {
  children: React.ReactNode;
  title: string;
  preview: string;
}

const EmailSkeleton = ({ children, title, preview }: EmailSkeletonProps) => (
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
    <Preview>{preview}</Preview>
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
            {title}
          </Heading>
          <Section className="px-4">{children}</Section>
          <Hr />
          <Text className="p-4">
            Pokud si nepřejete dostávat e-maily s těmito informacemi, můžete si nastavit preference notifikací na{' '}
            <Link href={process.env['HOSTING'] + '/me'}>své osobní stránce</Link> v sekci Notifikace.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default EmailSkeleton;
