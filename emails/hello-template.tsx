import { Body, Container, Head, Hr, Html, Preview, Section, Tailwind, Text } from '@react-email/components';

interface VerificationTemplateProps {
  username: string;
}

const HelloTemplate = ({ username }: VerificationTemplateProps) => (
  <Html>
    <Head />
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
        <Container>
          <div className="w-full fi-300 h-5"></div>
          <Hr className="w-52 h-1 mx-auto my-3 bg-fi-300 border-0 rounded" />
          <Text>Hi {username}!</Text>
          <Text>Welcome to Starter Kit for building a SaaS</Text>
          <Text>Please verify your email, with the link below:</Text>
          <Section></Section>
          <Hr />
          <Text>blaaaaaaaaaaaaaaaaaa in the footer.</Text>
        </Container>{' '}
      </Body>
    </Tailwind>
  </Html>
);

export default HelloTemplate;
