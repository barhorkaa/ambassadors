import EmailEventDisplay from '@/emails/utils/email-event-display';
import EmailSkeleton from '@/emails/utils/email-skeleton';
import { EventDetailModel } from '@/models/event-models';
import { Link, Text } from '@react-email/components';

interface NewSuggestionProps {
  event: EventDetailModel;
}

const NewSuggestionTemplate = ({ event }: NewSuggestionProps) => (
  <EmailSkeleton title={'Byl přidaný nový návrh na akci'} preview={''}>
    <Text>Do aplikace byl přidaný nový návrh na akci.</Text>
    <EmailEventDisplay event={event} />
    <Text>
      Návrh můžete potvrdit na <Link href={process.env['HOSTING'] + '/events/' + event.id}>stránce akce</Link>
    </Text>
  </EmailSkeleton>
);

export default NewSuggestionTemplate;
