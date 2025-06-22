import { MaterialList } from '@/app/ui/utils/content-list';
import { getAllMaterials } from '@/database/repository/material';
import { MaterialDetailModel } from '@/models/material-models';

export default async function Page() {
  const allMaterials: MaterialDetailModel[] = await getAllMaterials(false);

  return (
    <MaterialList
      title={'Dostupné materiály'}
      list={allMaterials}
      emptyMessage={'Aktuálně nejsou k dispoici žádné materiály'}
    />
  );
}
