import EmailEventDisplay from '@/emails/utils/email-event-display';
import EmailSkeleton from '@/emails/utils/email-skeleton';
import { EventDetailModel } from '@/models/event-models';
import { Link, Text } from '@react-email/components';

interface SignupApproveProps {
  event: EventDetailModel;
  substitute: boolean;
}

const SignupApproveTemplate = ({ event, substitute }: SignupApproveProps) => (
  <EmailSkeleton title={'Vaše prihlášení na akci bylo potvrzeno'} preview={''}>
    <Text>Právě jsme potvrdili vaše přihlášení na akci:</Text>
    <EmailEventDisplay event={event} />
    {substitute ?? (
      <Text>
        Na akci jste náhradník, pokud někdo z přihlásených nebude moct na akci jet, půjdete na akci místo nich. O této
        změne vám dojde informace, pokud máte na <Link href={process.env['HOSTING'] + '/me'}>své stránce</Link> v sekci
        notifikace zašktnuté, že chcte dostávat emaily o změnách v přihlášeních na akci. Doporučujeme tuto notifikaci
        zapnout, aby jste v připadě potřeby hned o změne vědeli.
      </Text>
    )}
    <Text>
      S vaší účastí počítame a těšíme se na viděnou. Jestli se z nějakých důvodů na akci nemůžete záčastnit dejte nám
      prosím co nejdřive vědet.
    </Text>
  </EmailSkeleton>
);

export default SignupApproveTemplate;
