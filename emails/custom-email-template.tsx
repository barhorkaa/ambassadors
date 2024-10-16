import EmailSkeleton from '@/emails/utils/email-skeleton';
import parse from 'html-react-parser';

interface CustomEmailProps {
  title: string;
  preview?: string;
  contents: string;
}

const CustomEmailTemplate = ({ title, contents, preview = title }: CustomEmailProps) => (
  <EmailSkeleton title={title} preview={preview} includeFooter={false}>
    {parse(contents)}
  </EmailSkeleton>
);

export default CustomEmailTemplate;
