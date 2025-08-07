import { PageUrl } from '@/app/utils/pages';
import Link from 'next/link';

interface PageNavigationProps {
  pages: PageUrl[];
  infoPageUrl?: string;
  modal?: React.ReactNode;
}

export default function PageNavigation({ pages, infoPageUrl, modal }: PageNavigationProps) {
  return (
    <div className="bg-fi-100 text-black mb-4 w-full flex flex-row justify-between pr-4">
      <ul className="menu menu-vertical lg:menu-horizontal font-semibold flex flex-col md:flex-row">
        {pages.map((page, index) => (
          <li key={index}>
            <Link href={page.url}>{page.name}</Link>
          </li>
        ))}
      </ul>
      <div className="items-top pt-4 md:pt-3">{modal}</div>
    </div>
  );
}
