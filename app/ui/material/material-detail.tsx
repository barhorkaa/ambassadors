import DeleteMaterialModal from '@/app/ui/modals/delete/delete-material-modal';
import EditMaterialModal from '@/app/ui/modals/edit/edit-material-modal';
import ReviveMaterialModal from '@/app/ui/modals/revive/revive-material-modal';
import DetailRowVertical from '@/app/ui/utils/data-display';
import { UserRoles } from '@/app/utils/user-roles';
import { auth } from '@/auth';
import { MaterialDetailModel } from '@/models/material-models';

export default async function MaterialDetail({ material }: { material: MaterialDetailModel }) {
  const session = await auth();

  return (
    <div className="data-display">
      <div className="card-body">
        <div className="flex flex-row justify-between">
          <h2>{material.name}</h2>
          {session?.user.role === UserRoles.manager && (
            <div className="flex gap-2 md:gap-4">
              {material.deletedAt === null ? (
                <DeleteMaterialModal materialId={material.id} />
              ) : (
                <ReviveMaterialModal materialId={material.id} />
              )}
              <EditMaterialModal material={material} />
            </div>
          )}
        </div>
        <DetailRowVertical label={''} value={material.description!} />
        {session?.user.role == UserRoles.manager && (
          <>
            <DetailRowVertical label={'Vytvořeno'} value={material.createdAt.toLocaleString('cs-CZ')} />
            <DetailRowVertical label={'Upraveno'} value={material.updatedAt.toLocaleString('cs-CZ')} />
            <DetailRowVertical
              label={'Zmazáno'}
              value={material.deletedAt == null ? 'Ne' : material.deletedAt.toLocaleString('cs-CZ')}
            />
          </>
        )}
      </div>
    </div>
  );
}
