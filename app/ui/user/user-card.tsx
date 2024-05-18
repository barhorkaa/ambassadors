import { UserModel } from '@/models/user-models';
import Link from 'next/link';

export default function UserCard({ user }: { user: UserModel }) {
  return (
    <Link href={`ambassadors/${user.id}`} className="card shadow-lg">
      <div className="card-body">
        <h2 className="card-title">{user.name}</h2>
        <hr className="w-full my-0" />
        <p>E-mail: {user.email}</p>
        <p>Tel. číslo: {user.phone_number}</p>
      </div>
    </Link>
  );
}
