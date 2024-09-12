import EmailEventDisplay from '@/emails/utils/email-event-display';
import EmailSkeleton from '@/emails/utils/email-skeleton';
import { EventDetailModel } from '@/models/event-models';
import { Heading, Text } from '@react-email/components';

interface EventChangeProps {
  newEvent: EventDetailModel;
  oldEvent: EventDetailModel;
}

const EventChangeTemplate = ({ newEvent, oldEvent }: EventChangeProps) => (
  <EmailSkeleton title={'Došlo ke změne akce'} preview={''}>
    <Text>Akce, na kterou jste přihlášeni, byla změněná</Text>
    <Heading as="h3">Starý detail</Heading>
    <EmailEventDisplay event={oldEvent} />
    <Heading as="h3">Nový detail</Heading>
    <EmailEventDisplay event={newEvent} />
  </EmailSkeleton>
);

export default EventChangeTemplate;
