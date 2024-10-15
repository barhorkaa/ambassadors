import BackNavigation from '@/app/ui/layout/back-navigation';
import { BaseLayoutProps } from '@/app/utils/interface-props';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Detail akce | AmbassadorsFIMU',
};

interface LayoutProps {
  event: React.ReactNode;
  users: React.ReactNode;
  info: React.ReactNode;
}

export default function Layout({ children, event, users, info }: BaseLayoutProps & LayoutProps) {
  return (
    <section>
      <div className="align-text-base flex flex-row gap-4 pb-2">
        <BackNavigation href={'/events/all'} tooltip={'Zpátky na akce'} />
        <h1 className="font-light text-xl">Detail akce</h1>
      </div>
      {children}
      <div className="flex flex-col gap-4">
        {/*{event}*/}
        <div className="grid grid-cols-[min-content_min-conent] gap-4 md:grid-cols-9 md:grid-rows-[min-content_min-conent]">
          <div className="row-start-1 md:col-span-6">{event}</div>
          <div className="md:row-start-1 md:row-span-2 md:col-start-7 md:col-span-4">{users}</div>
          <div className="md:row-start-2 md:col-start-1 md:col-span-6">{info}</div>
        </div>
      </div>
    </section>
  );
}
