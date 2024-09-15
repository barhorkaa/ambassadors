import EmailSkeleton from '@/emails/utils/email-skeleton';
import EmailUserDisplay from '@/emails/utils/email-user-display';
import { UserModel } from '@/models/user-models';
import { Heading, Text } from '@react-email/components';

interface PersonalInfoChangeProps {
  oldInfo: UserModel;
  newInfo: UserModel;
}

const PersonalInfoChangeTemplate = ({ oldInfo, newInfo }: PersonalInfoChangeProps) => (
  <EmailSkeleton title={'Došlo ke změně vašich osobních údajů'} preview={''}>
    <Text>Vaše osobní informace byli změněny.</Text>
    <Heading as="h3">Informace po změně: </Heading>
    <EmailUserDisplay user={newInfo} compareUser={oldInfo} />
    <Heading as="h3">Informace před změnou: </Heading>
    <EmailUserDisplay user={oldInfo} compareUser={newInfo} />
  </EmailSkeleton>
);

export default PersonalInfoChangeTemplate;
