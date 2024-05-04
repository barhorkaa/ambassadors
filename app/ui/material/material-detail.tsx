import EditMaterialModal from '@/app/ui/modals/edit-material-modal';
import DetailRow from '@/app/ui/utils/detail-row';
import { MaterialFullModel } from '@/models/material/material-full-model';

export default function MaterialDetail(params: { material: MaterialFullModel; isManager: boolean }) {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h2>{params.material.name}</h2>
        {params.isManager && <EditMaterialModal material={params.material} />}
      </div>
      <div>
        <DetailRow label={'Popis'} value={params.material.description!} />
      </div>
      <hr />
    </div>
  );
}