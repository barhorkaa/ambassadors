import Page from '@/app/events/(without-layout)/[id]/@event/page';

export default async function Default({ params }: { params: { id: string } }) {
  return <Page params={params} />;
}
