import { EventDetailModel } from '@/models/event-models';
import { Container, Heading, Text } from '@react-email/components';

interface EventDisplayProps {
  event: EventDetailModel;
}

const EmailEventDisplay = ({ event }: EventDisplayProps) => (
  <Container className="shadow-xl px-4 py-2 ">
    <Heading as="h2" className="">
      {event.name}
    </Heading>
    <Text>
      <strong>Datum: </strong>
      {event.date ? event.date.toLocaleDateString() : 'Zatím nezadáno'}
    </Text>
    <Text>
      <strong>Limit: </strong>
      {event.limit}
    </Text>
  </Container>
);

export default EmailEventDisplay;
