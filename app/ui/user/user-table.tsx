import { LinkWrappedTableCell } from '@/app/ui/utils/component-table';
import { UserModel } from '@/models/user-models';

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
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-base-300 hover:cursor-pointer">
              <LinkWrappedTableCell href={`/ambassadors/${user.id}/detail`}>{user.name}</LinkWrappedTableCell>
              <LinkWrappedTableCell href={`/ambassadors/${user.id}/detail`}>{user.uco} </LinkWrappedTableCell>
              <LinkWrappedTableCell href={`/ambassadors/${user.id}/detail`}>{user.email}</LinkWrappedTableCell>
              <LinkWrappedTableCell href={`/ambassadors/${user.id}/detail`}>{user.phone_number}</LinkWrappedTableCell>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
