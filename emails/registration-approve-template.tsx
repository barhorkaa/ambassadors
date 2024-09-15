import EmailSkeleton from '@/emails/utils/email-skeleton';
import { Heading, Hr, Link, Text } from '@react-email/components';

const RegistrationApproveTemplate = () => (
  <EmailSkeleton title={'Vaše registrace byla potvrzena'} preview={'Potvrdili jsme vaši registraci'}>
    <Text>Váš účet byl potvrzen. Nyní můžete aplikaci využívat naplno.</Text>
    <Heading as="h2">Přihlaste se na akci</Heading>
    <Text>
      <Link href={process.env['HOSTING'] + '/events/all'}>Zde</Link> se můžete podívat na akce, které organizujeme. Líbí
      se vám nějaká, přihlaste se! Nevidíte akci, ne ktreou chcete jet? Vytvořže nový návrh!
    </Text>
    <Heading as="h2">Seznamte se s programem</Heading>
    <Text>
      Podívejte se na různé <Link href={process.env['HOSTING'] + '/events/types/all'}>druhy akcí</Link>, které propagace
      nabízí, nebo na <Link href={process.env['HOSTING'] + '/materials/all'}>propagační materiály</Link>, které sebou
      můžete na akci vzít.
    </Text>
    <Hr />
    <Heading as="h1">Těšíme se na spolupráci!</Heading>
  </EmailSkeleton>
);

export default RegistrationApproveTemplate;
