import { HeroCenterLayout } from '@/app/ui/utils/component-layouts';
import { UserRoles } from '@/app/utils/user-roles';
import { auth } from '@/auth';

export default async function Page() {
  const session = await auth();

  return (
    <HeroCenterLayout title={'Akce byla úspěšně vytvořena!'} url={'/events'} buttonTitle={'Zpátky na akce'}>
      {session?.user.role === UserRoles.ambassador && (
        <p className="pb-6">
          Váš návrh nyní musí schválit zaměstnanec propagace. Po schválení se bute moct na akci přihlásit.
        </p>
      )}
    </HeroCenterLayout>
  );
}
