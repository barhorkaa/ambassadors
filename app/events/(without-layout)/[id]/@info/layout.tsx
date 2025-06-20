import PageNavigation from '@/app/ui/layout/page-navigation';
import { PageUrl } from '@/app/utils/pages';

export default function Layout({ params, children }: { params: { id: string }; children: React.ReactNode }) {
  const eventPages: PageUrl[] = [
    { name: 'Typ akce', url: `/events/${params.id}` },
    { name: 'Zpráva z akce', url: `/events/${params.id}/report` },
    { name: 'Doplňující informace', url: `/events/${params.id}/emails` },
  ];

  return (
    <div>
      <PageNavigation pages={eventPages} />
      {children}
    </div>
  );
}
