import { HeroCenterLayout } from '@/app/ui/utils/component-layouts';

export default function Page() {
  return (
    <HeroCenterLayout title={'E-mail byl zaslán'}>
      <p>
        Na vaší adresu jsme zaslali e-mail s linkem, kterým si můžete obnovit heslo. Pokračujte podle instrukcí v
        e-mailu.
      </p>
      <p>Tuto stráku můžete zavřít.</p>
    </HeroCenterLayout>
  );
}
