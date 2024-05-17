import DeleteMaterialModal from '@/app/ui/modals/delete/delete-material-modal';
import EditMaterialModal from '@/app/ui/modals/edit/edit-material-modal';
import DetailRow from '@/app/ui/utils/detail-row';
import { auth } from '@/auth';
import { MaterialDetailModel } from '@/models/material-models';

export default async function MaterialDetail({ material }: { material: MaterialDetailModel }) {
  const session = await auth();

  return (
    <div className="data-display card-body">
      <div className="flex flex-row justify-between">
        <h2>{material.name}</h2>
        {session?.user.role === 'manager' && (
          <div className="flex gap-4">
            <DeleteMaterialModal materialId={material.id} />
            <EditMaterialModal material={material} />
          </div>
        )}
      </div>
      <div>
        <DetailRow label={''} value={material.description!} />
      </div>
      {session?.user.role == 'manager' && (
        <div>
          <DetailRow label={'Vytvořeno'} value={material.createdAt.toLocaleString()} />
          <DetailRow label={'Upraveno'} value={material.updatedAt.toLocaleString()} />
          <DetailRow
            label={'Zmazáno'}
            value={material.deletedAt == null ? 'Ne' : material.deletedAt.toLocaleString()}
          />
        </div>
      )}
    </div>
  );
}
