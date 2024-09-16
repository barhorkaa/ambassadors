import EmailSkeleton from '@/emails/utils/email-skeleton';
import { Text } from '@react-email/components';

const ManagerDemotionTemplate = () => (
  <EmailSkeleton
    title={'Byla vám odebrána role manažera aplikace'}
    preview={'Vaše role byla změněna a přišli jste o manažerská privilégia'}
  >
    <Text>
      A aplikaci nyní už nejste manažerem. S odebráním vyší role přicházíte o privilegia na spravování aplikace. Pokud
      se vám změny v aplikaci neukázali, zkuste se znovu přihlásit.
    </Text>
    <Text>Děkujeme za vaši dosavadní pomoc a přejeme mnoho zdaru jako ambasador!</Text>
  </EmailSkeleton>
);

export default ManagerDemotionTemplate;
