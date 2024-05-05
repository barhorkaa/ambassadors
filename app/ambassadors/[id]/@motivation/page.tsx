import MotivationDetail from '@/app/ui/motivation/motivation-detail';
import { getUserMotivation } from '@/database/repository/motivation';
import { MotivationModel } from '@/models/motivation-models';

export default async function Motivation({ params }: { params: { id: string } }) {
  const userMotivation: MotivationModel = await getUserMotivation(params.id);

  return (
    <div>
      <h2>Motivační formulář</h2>
      <MotivationDetail motivation={userMotivation} />
    </div>
  );
}
