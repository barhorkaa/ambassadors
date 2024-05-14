'use client';

import { UserModel } from '@/models/user-models';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { redirect } from 'next/navigation';

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
            <tr
              className="hover"
              key={user.id}
              onClick={() => {
                redirect(`ambassadors/${user.id}`);
              }}
            >
              <td>
                <Link href={`ambassadors/${user.id}`}>{user.name}</Link>
              </td>
              <td>
                <Link href={`ambassadors/${user.id}`}>{user.uco}</Link>
              </td>
              <td>
                <Link href={`ambassadors/${user.id}`}>{user.email}</Link>
              </td>
              <td>
                <Link href={`ambassadors/${user.id}`}>{user.phone_number} </Link>
              </td>
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
