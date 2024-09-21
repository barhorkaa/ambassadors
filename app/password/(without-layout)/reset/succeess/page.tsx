import { HeroCenterLayout } from '@/app/ui/utils/component-layouts';
import Link from 'next/link';

export default function Page() {
  return (
    <HeroCenterLayout title={'Heslo bylo úspěšně změněno'}>
      <p>Vaše heslo bylo změněné. Zkuste se nyní přihlásit.</p>
      <Link className="btn" href={'/login'}>
        Přihlásit se
      </Link>
    </HeroCenterLayout>
  );
}
