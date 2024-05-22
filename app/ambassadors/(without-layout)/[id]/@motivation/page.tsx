import MotivationDetail from '@/app/ui/motivation/motivation-detail';
import { getUserMotivation } from '@/database/repository/motivation';
import { MotivationModel } from '@/models/motivation-models';

export default async function Page({ params }: { params: { id: string } }) {
  const userMotivation: MotivationModel | undefined = await getUserMotivation(params.id);

  return (
    <div className="data-display">
      <div className="card-body">
        <h2 className="card-title">Motivační formulář</h2>
        <MotivationDetail motivation={userMotivation} />
      </div>
    </div>
  );
}
