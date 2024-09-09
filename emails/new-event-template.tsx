import EmailSkeleton from '@/emails/utils/email-skeleton';
import { EventDetailModel } from '@/models/event-models';
import { Container, Heading, Link, Text } from '@react-email/components';

const NewEventTemplate = ({ event }: { event: EventDetailModel }) => (
  <EmailSkeleton title={'Byla přidaná nová akce'}>
    <Text>Přidali jsme novou akci!</Text>
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
    <Text>
      Jestli máte zájem zúčastnit se na akci můžete se přihlásit na{' '}
      <Link href={process.env['HOSTING'] + '/events/' + event.id}>stránce akce</Link>.
    </Text>
  </EmailSkeleton>
);

export default NewEventTemplate;
