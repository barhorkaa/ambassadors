import EmailSkeleton from '@/emails/utils/email-skeleton';
import { Text } from '@react-email/components';

interface CustomEmailProps {
  title: string;
  preview?: string;
  contents: string[];
}

const CustomEmailTemplate = ({ title, contents, preview = title }: CustomEmailProps) => (
  <EmailSkeleton title={title} preview={preview} includeFooter={false}>
    {contents.map((content, index) => (
      <Text key={index}>{content}</Text>
    ))}
  </EmailSkeleton>
);
