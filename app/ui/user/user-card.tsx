import { UserModel } from '@/models/userModel';
import Link from 'next/link';

export default async function UserCard(props: { user: UserModel }) {
  console.log('user in card is', props.user);
  return (
    <div className="card shadow-lg w-5/6">
      <Link href={`ambassadors/${props.user.id}`}>
        <div className="card-body">
          <h2 className="card-title">{props.user.name}</h2>
          <div className="flex flex-row justify-between">
            <div>
              <p>E-mail: {props.user.email}</p>
              <p>Tel. číslo: {props.user.phone_number}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
