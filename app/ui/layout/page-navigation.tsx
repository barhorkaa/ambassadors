import { PageUrl } from '@/app/utils/pages';
import Link from 'next/link';

export default function PageNavigation({ pages }: { pages: PageUrl[] }) {
  return (
    <ul className="page-menu">
      {pages.map((page, index) => (
        <li key={index}>
          <Link href={page.url}>{page.name}</Link>
        </li>
      ))}
    </ul>
  );
}
