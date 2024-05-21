import { HeroCenterLayout } from '@/app/ui/utils/component-layouts';

export default function Loading() {
  return (
    <HeroCenterLayout title={'Načítám...'}>
      <p className="pb-6">Prosím čekejte</p>
      <p className="pb-6">Trpělivost je ctnost, i servery potřebují čas.</p>
      <span className="loading loading-spinner loading-xl" />
    </HeroCenterLayout>
  );
}
