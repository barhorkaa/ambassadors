import { UserModel } from '@/models/user-models';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface UserTableProps {
  users: UserModel[];
}

export default function UserTable({ users }: UserTableProps) {
  return (
    <div className="overflow-x-auto data-display p-4">
      <table className="table">
        <thead>
          <tr>
            <th>Jméno</th>
            <th>UČO</th>
            <th>E-mail</th>
            <th>Tel. číslo</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className="hover" key={user.id}>
              <td>
                <Link href={`/ambassadors/${user.id}`} rel="noopener noreferrer" target="_blank">
                  {user.name}
                </Link>
              </td>
              <td>{user.uco}</td>
              <td>{user.email}</td>
              <td>{user.phone_number}</td>
              <td>
                <Link href={`/ambassadors/${user.id}`} rel="noopener noreferrer" target="_blank">
                  <ArrowTopRightOnSquareIcon className="h-5" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
