import { DisplayRow } from '@/emails/utils/email-user-display';
import { EventDetailModel } from '@/models/event-models';
import { Container, Heading } from '@react-email/components';

interface EventDisplayProps {
  event: EventDetailModel;
  eventCompare: EventDetailModel;
}

const EmailEventDisplay = ({ event, eventCompare }: EventDisplayProps) => (
  <Container className="shadow-xl px-4 py-2 ">
    <Heading as="h2" className={event.name !== eventCompare.name ? 'text-[#FF0000]' : ''}>
      {event.name}
    </Heading>
    <DisplayRow
      tag={'Datum'}
      property={event.date ? event.date.toLocaleDateString() : ''}
      propertyComp={eventCompare.date ? eventCompare.date.toLocaleDateString() : ''}
      value={event.date ? event.date.toLocaleDateString() : 'Zatím nezadáno'}
    />
    <DisplayRow tag={'Limit'} property={event.limit} propertyComp={eventCompare.limit} />
  </Container>
);

export default EmailEventDisplay;
