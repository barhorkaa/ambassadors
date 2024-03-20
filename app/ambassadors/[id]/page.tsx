import UserDetail from "@/app/ui/user/user-detail";
import {getUserById} from "@/database/repository/user";
import {UserModel} from "@/app/models/userModel";
import MotivationDetail from "@/app/ui/motivation/motivation-detail";
import {getMotivationById} from "@/database/repository/motivation";
import {MotivationFormData} from "@/app/lib/actions/motivation";

export default async function User({params}: { params: { id: string }}) {
  const user: UserModel | undefined = await getUserById(params.id);
  if (user === undefined) {
    return (
      <div>
        failed to get userto
      </div>
    )
  }

  const userMotivation: MotivationFormData | undefined = await getMotivationById(params.id);

  return(
    <div className="flex flex-row justify-center sm:flex-col">
      <div>
        <h1 className="font-bold text-xl py-4">
          Detail uživatele
        </h1>
        <UserDetail user={user}/>
      </div>
      <div>
        <h1 className="font-bold text-xl py-4">
          Motivační formulář
        </h1>
        <MotivationDetail motivation={userMotivation}/>
      </div>

    </div>
  )
}