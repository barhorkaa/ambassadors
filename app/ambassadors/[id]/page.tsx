import UserDetail from "@/app/ui/user/user-detail";
import {getUserById} from "@/database/repository/user";
import {UserModel} from "@/app/models/userModel";

export default async function User({params}: { params: { id: string }}) {
  const user: UserModel | undefined = await getUserById(params.id);
  if (user === undefined) {
    return (
      <div>
        failed to get user
      </div>
    )
  }

  return(
    <div>
      <h1 className="font-bold text-xl py-4">
        Detail uživatele
      </h1>
      <UserDetail user={user}/>

    </div>
  )
}