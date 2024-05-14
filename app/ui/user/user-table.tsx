import { UserModel } from '@/models/user-models';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function UserTable({ users }: { users: UserModel[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="table table-fixed">
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
              <td>{user.name}</td>
              <td>{user.uco}</td>
              <td>{user.email}</td>
              <td>{user.phone_number}</td>
              <td>
                <Link href={`ambassadors/${user.id}`}>
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
