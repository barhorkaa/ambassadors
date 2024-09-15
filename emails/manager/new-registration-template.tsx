import EmailSkeleton from '@/emails/utils/email-skeleton';
import { UserModel } from '@/models/user-models';
import { Container, Heading, Hr, Link, Text } from '@react-email/components';

interface NewRegistrationProps {
  user: UserModel;
}

const NewRegistrationTemplate = ({ user }: NewRegistrationProps) => (
  <EmailSkeleton title={'Noý ambasador'} preview={'Do aplikace se zaregistroval nový ambasador'}>
    <Text>
      Do aplikace se právě zaregistroval nový ambasador. Registraci můžete potvrdit{' '}
      <Link href={process.env['HOSTING' + '/ambassadors/' + user.id]}>zde</Link> kliknutím na "Potvrdit".
    </Text>
    <Container className="shadow-xl px-4 py-2">
      <Heading as="h3">{user.name}</Heading>
      <Hr />
      <Text>UČO: {user.uco}</Text>
      <Text>E-mail: {user.email}</Text>
      <Text>Tel. číslo: {user.phone_number}</Text>
    </Container>
  </EmailSkeleton>
);

export default NewRegistrationTemplate;
