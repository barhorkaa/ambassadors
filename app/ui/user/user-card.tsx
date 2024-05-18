import { UserModel } from '@/models/user-models';
import Link from 'next/link';

export default function UserCard({ user }: { user: UserModel }) {
  return (
    <div className="card shadow-lg w-5/6">
      <Link href={`ambassadors/${user.id}`}>
        <div className="card-body">
          <h2 className="card-title">{user.name}</h2>
          <div className="flex flex-row justify-between">
            <div>
              <p>E-mail: {user.email}</p>
              <p>Tel. číslo: {user.phone_number}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
