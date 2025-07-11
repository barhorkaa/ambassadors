import { PageUrl } from '@/app/utils/pages';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface PageNavigationProps {
  pages: PageUrl[];
  infoPageUrl: string;
}

export default function PageNavigation({ pages, infoPageUrl }: PageNavigationProps) {
  return (
    <ul className="menu menu-vertical lg:menu-horizontal bg-fi-100 text-black font-semibold w-full mb-4 flex flex-row justify-between">
      <div className="flex flex-col md:flex-row">
        {pages.map((page, index) => (
          <li key={index}>
            <Link href={page.url}>{page.name}</Link>
          </li>
        ))}
      </div>
      <li>
        <Link href={infoPageUrl} className="self-center tooltip tooltip-bottom" data-tip="Informace o sekci">
          <QuestionMarkCircleIcon className="h-5" />
        </Link>
      </li>
    </ul>
  );
}
