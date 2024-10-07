import EmailEventDisplay from '@/emails/utils/email-event-display';
import EmailSkeleton from '@/emails/utils/email-skeleton';
import { EventDetailModel } from '@/models/event-models';
import { Link, Text } from '@react-email/components';

const NewEventTemplate = ({ event }: { event: EventDetailModel }) => (
  <EmailSkeleton title={'Byla přidaná nová akce'} preview={'Přidali jsme novou akci'}>
    <Text>Skvělá zpráva – přidali jsme novou akci!</Text>
    <EmailEventDisplay event={event} />
    <Text>
      Máte-li zájem se akce zúčastnit, můžete se přihlásit na{' '}
      <Link href={process.env['HOSTING'] + '/events/' + event.id}>stránce akce</Link>.
    </Text>
  </EmailSkeleton>
);

export default NewEventTemplate;
