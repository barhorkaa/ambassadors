import MaterialDetail from '@/app/ui/material/material-detail';
import { getAllMaterials } from '@/database/repository/material';
import { MaterialDetailModel } from '@/models/material-models';

export default async function Page() {
  const deletedMaterials: MaterialDetailModel[] = await getAllMaterials(true);

  return (
    <>
      {deletedMaterials.length === 0 ? (
        <h2>Aktuálně jsou všechny materiály používány</h2>
      ) : (
        <div className="flex flex-col gap-6">
          {deletedMaterials.map((material) => (
            <MaterialDetail key={material.id} material={material} />
          ))}
        </div>
      )}
    </>
  );
}
