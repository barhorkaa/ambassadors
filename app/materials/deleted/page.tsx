import { MaterialList } from '@/app/ui/utils/content-list';
import { getAllMaterials } from '@/database/repository/material';
import { MaterialDetailModel } from '@/models/material-models';

export default async function Page() {
  const deletedMaterials: MaterialDetailModel[] = await getAllMaterials(true);

  return (
    <MaterialList
      title={'Vymazané materiály'}
      list={deletedMaterials}
      emptyMessage={'Aktuálně jsou všechny materiály používány'}
    />
  );
}
