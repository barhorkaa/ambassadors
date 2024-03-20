import UserDetail from "@/app/ui/user/user-detail";
import {getUserById} from "@/database/repository/user";
import {UserModel} from "@/models/userModel";
import MotivationDetail from "@/app/ui/motivation/motivation-detail";
import {getMotivationById} from "@/database/repository/motivation";
import {MotivationFormData} from "@/app/lib/actions/motivation";
import ApproveButton from "@/app/ui/button/approve-button";

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
    <div className="flex flex-col">
      <div className="flex flex-row py-4">
        <h1 className="font-bold text-3xl">Informace o uživateli: {user.name}</h1>
      </div>
      <hr className=""/>
      <div className="flex flex-row justify-start gap-10 sm:flex-col">
        <div>
          <div className="flex flex-row justify-between">
            <h2 className="font-bold text-xl py-4">
              Detail uživatele
            </h2>
            {
              !user.approved &&
              <ApproveButton id={user.id}/>
            }
          </div>

          <UserDetail user={user}/>
        </div>
        <div>
          <h2 className="font-bold text-xl py-4">
            Motivační formulář
          </h2>
          <MotivationDetail motivation={userMotivation}/>
        </div>
      </div>
    </div>
  )
}