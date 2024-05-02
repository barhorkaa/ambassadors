import MaterialDetail from '@/app/ui/material/material-detail';
import CreateMaterialModal from '@/app/ui/modals/create-material-modal';
import { auth } from '@/auth';
import { getAllMaterials } from '@/database/repository/material';

export default async function Material() {
  const session = await auth();
  const isManager = session?.user.role === 'manager';

  const allMaterials = await getAllMaterials();

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between">
        <h1>Materiály</h1>
        {isManager && <CreateMaterialModal />}
      </div>
      <hr className="w-full" />
      {allMaterials.map((material) => (
        <MaterialDetail key={material.id} material={material} isManager={isManager} />
      ))}
    </>
  );
}
