import EmailSkeleton from '@/emails/utils/email-skeleton';
import { EventDetailModel } from '@/models/event-models';
import { Text } from '@react-email/components';

interface SignupPromotionProps {
  event: EventDetailModel;
}

const SignupPromotionTemplate = ({ event }: SignupPromotionProps) => (
  <EmailSkeleton title={'Nyní už nejste náhradník'} preview={'Na akci' + event.name + 'již nejste náhradník'}>
    <Text>
      Vaše přihlášení na akci {event.name} bylo změněno. Někto před vámi se rozhodl akce nezúčastnit a byli jste
      posunuti na jeho místo.
    </Text>
    <Text>
      S vaší účastí počítame a těšíme se na viděnou. Jestli se z nějakých důvodů na akci nemůžete záčastnit dejte nám
      prosím co nejdřive vědet.
    </Text>
  </EmailSkeleton>
);

export default SignupPromotionTemplate;
