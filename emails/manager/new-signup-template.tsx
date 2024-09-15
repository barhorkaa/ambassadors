import EmailSkeleton from '@/emails/utils/email-skeleton';
import { EventDetailModel } from '@/models/event-models';
import { UserModel } from '@/models/user-models';
import { Container, Link, Text } from '@react-email/components';

interface NewSignupProps {
  event: EventDetailModel;
  user: UserModel;
  substitute: boolean;
}

const NewSignupTemplate = ({ event, user, substitute }: NewSignupProps) => (
  <EmailSkeleton title={'Nové přihlášení na akci'} preview={'Někto by rád vyjel na akci'}>
    <Text>V aplikaci přibylo noé přihlášení na akci.</Text>
    <Container>
      <Text>
        Uživatel: <Link href={process.env['HOSTING'] + '/ambassadors/' + user.id}>{user.name}</Link>
      </Text>
      <Text>
        Akce: <Link href={process.env['HOSTING'] + '/events/' + event.id}>{event.name}</Link>
      </Text>
      <Text>Náhradník: {substitute ? 'Ano' : 'Ne'}</Text>
    </Container>
    <Text>
      Přihlášení můžete potvrdit <Link href={process.env['HOSTING'] + '/signups/unapproved'}>zde</Link>
    </Text>
  </EmailSkeleton>
);

export default NewSignupTemplate;
