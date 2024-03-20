import {getAllAmbassadors} from "@/database/repository/user";
import {UserModel} from "@/app/models/userModel";
import ApproveButton from "@/app/ui/button/approve-button";

export default async function UserTable(props: {users: UserModel[]}) {
  // let ambassadors: UserModel[] | undefined = await getAllAmbassadors();
  // if (ambassadors === undefined) {
  //   ambassadors = []
  // }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Jméno</th>
            <th>UČO</th>
            <th>E-mail</th>
            <th>Tel. číslo</th>
            <th>Potvrdit</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => (
            <tr className="hover">
              <td>{user.name}</td>
              <td>{user.uco}</td>
              <td>{user.email}</td>
              <td>{user.phone_number}</td>
              {!user.approved &&
              <td>
                  <ApproveButton/>
              </td>}
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}