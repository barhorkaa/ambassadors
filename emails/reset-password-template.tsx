import EmailSkeleton from '@/emails/utils/email-skeleton';
import { Link, Text } from '@react-email/components';

interface ResetPasswordProps {
  token: string;
}

const ResetPasswordTemplate = ({ token }: ResetPasswordProps) => (
  <EmailSkeleton title={'Obnovení hesla'} preview={'Obnovte své heslo'}>
    <Text>Heslo obnovíte na stránce, na kterou se dostanete kliknutím na následujíci link.</Text>
    <Link href={process.env['HOSTING'] + '/password/reset/' + token}>Resetovat heslo</Link>
  </EmailSkeleton>
);

export default ResetPasswordTemplate;
