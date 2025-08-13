import Page from '@/app/events/(without-layout)/[id]/@users/page';

export default async function Default({ params }: { params: { id: string } }) {
  return <Page params={params} />;
}
