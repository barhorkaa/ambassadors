import EmailSkeleton from '@/emails/utils/email-skeleton';
import { Heading, Hr, Text } from '@react-email/components';

const ManagerPromotionTemplate = () => (
  <EmailSkeleton title={'Byli jste povýšeni na manažera'} preview={'Vaše role byla změněna a stal jste se manažerem'}>
    <Text>Gratulujeme! Byli jste povýšení na manažera v aplikaci AmbassadorsFIMU!</Text>
    <Text>
      Jakožto manažer máte v aplikaci věčší privilegia a můžete v ní využívat všechny funkce bez kontroly nebo potřeby
      ověření někým dalším. Vaše nově zpřístupněné agendy jsou:
    </Text>
    <Hr />
    <Heading as="h2">Zpráva uživatelů</Heading>
    <Text>Jakožto manažer můžete zpravovat </Text>
    <Hr />
    <Heading as="h2">Zpráva akcí</Heading>
    <Text>Jakožto manažer můžete zpravovat </Text>
    <Hr />
    <Heading as="h2">Zpráva přihlášení na akce</Heading>
    <Text>Jakožto manažer můžete zpravovat </Text>
    <Hr />
    <Heading as="h2">Zpráva druhú akcí</Heading>
    <Text>Jakožto manažer můžete zpravovat </Text>
    <Hr />
    <Heading as="h2">Zpráva materiálů</Heading>
    <Text>Jakožto manažer můžete zpravovat </Text>
  </EmailSkeleton>
);

export default ManagerPromotionTemplate;
