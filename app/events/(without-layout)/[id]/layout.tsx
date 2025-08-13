import BackNavigation from '@/app/ui/layout/back-navigation';
import PageNavigation from '@/app/ui/layout/page-navigation';
import { BaseLayoutProps } from '@/app/utils/interface-props';
import { PageUrl } from '@/app/utils/pages';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Detail akce | AmbassadorsFIMU',
};

interface LayoutProps {
  event: React.ReactNode;
  users: React.ReactNode;
}

export default function Layout({
  children,
  event,
  users,
  params,
}: BaseLayoutProps &
  LayoutProps & {
    params: { id: string };
  }) {
  const eventPages: PageUrl[] = [
    { name: 'Typ akce', url: `/events/${params.id}` },
    { name: 'Zpráva z akce', url: `/events/${params.id}/report` },
    { name: 'Doplňující informace', url: `/events/${params.id}/emails` },
  ];

  return (
    <section>
      <div className="align-text-base flex flex-row gap-4 pb-2">
        <BackNavigation href={'/events'} tooltip={'Zpátky na akce'} />
        <h1 className="font-light text-xl">Detail akce</h1>
      </div>
      {/*{children}*/}
      <div className="flex flex-col gap-4">
        {/*{event}*/}
        <div className="grid grid-cols-[min-content_min-conent] gap-4 md:grid-cols-9 md:grid-rows-[min-content_min-conent]">
          <div className="row-start-1 md:col-span-6">{event}</div>
          <div className="md:row-start-1 md:row-span-2 md:col-start-7 md:col-span-4">{users}</div>
          <div className="md:row-start-2 md:col-start-1 md:col-span-6">
            <PageNavigation pages={eventPages} />
            {children}
          </div>
          {/*<div className="md:row-start-3 md:col-start-1 md:col-span-6">{children}</div>*/}
        </div>
      </div>
    </section>
  );
}
