import EmailSkeleton from '@/emails/utils/email-skeleton';
import { EventDetailModel } from '@/models/event-models';
import { ReportModel } from '@/models/report-models';
import { Heading, Hr, Link, Text } from '@react-email/components';

interface NewReportProps {
  report: ReportModel;
  event: EventDetailModel;
}

const NewReportTemplate = ({ report, event }: NewReportProps) => (
  <EmailSkeleton title={'Byla přidána nová zpráva z akce '} preview={''}>
    <Text>
      Do aplikace byla nahrána zpráva k akci
      <Link href={process.env['HOSTING'] + '/events/' + event.id}> {event.name}</Link>
    </Text>
    <Text>Před potvrzením si zprávu detailně přečtěte a oboznamte se s jejím obsahem.</Text>
    <Hr />
    <Heading as="h3">Krátká sumarizace</Heading>
    <Text>Počet návštěvníků: {report.numberOfAttendees}</Text>
    <Text>Poznámky: {report.notes}</Text>
    <Text>Nápady: {report.ideas}</Text>
  </EmailSkeleton>
);

export default NewReportTemplate;
