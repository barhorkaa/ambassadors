import EmailSkeleton from '@/emails/utils/email-skeleton';
import { Link, Text } from '@react-email/components';

interface VerifyEmailProps {
  token: string;
}

const VerifyEmailTemplate = ({ token }: VerifyEmailProps) => (
  <EmailSkeleton
    title={'Potvrďte svůj e-mail'}
    preview={'Pro dokončení registrace musíte potvrdit svůj e-mail'}
    includeFooter={false}
  >
    <Text>Svůj e-mail potvrďtě kliknutím na následujíci link.</Text>
    <Link href={process.env['HOSTING'] + '/email/verify/' + token}>Potvrdit e-mail</Link>
  </EmailSkeleton>
);

export default VerifyEmailTemplate;
