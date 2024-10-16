import { EventGroupEmailModel } from '@/models/event-group-emails-models';
import parse from 'html-react-parser';

export default function GroupEmailDetail({ email }: { email: EventGroupEmailModel }) {
  return (
    <div className="data-display">
      <div className="card-body">
        <p className="text-sm underline">Zasláno: {email.createdAt?.toLocaleDateString()}</p>
        {parse(email.contents)}
      </div>
    </div>
  );
}
