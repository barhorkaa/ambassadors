import MotivationDetail from '@/app/ui/motivation/motivation-detail';
import { getUserMotivation } from '@/database/repository/motivation';
import { MotivationModel } from '@/models/motivation-models';

export default async function Motivation({ params }: { params: { id: string } }) {
  const userMotivation: MotivationModel = await getUserMotivation(params.id);

  return (
    <div className="card-compact md:card-normal md:col-span-2 bg-base-100 shadow-md">
      <div className="card-body">
        <h2 className="card-title">Motivační formulář</h2>
        <MotivationDetail motivation={userMotivation} />
      </div>
    </div>
  );
}
