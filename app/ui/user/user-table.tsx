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
              <LinkWrappedTableCell link={`/ambassadors/${user.id}`} content={user.name} />
              <LinkWrappedTableCell link={`/ambassadors/${user.id}`} content={user.uco} />
              <LinkWrappedTableCell link={`/ambassadors/${user.id}`} content={user.email} />
              <LinkWrappedTableCell link={`/ambassadors/${user.id}`} content={user.phone_number} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
