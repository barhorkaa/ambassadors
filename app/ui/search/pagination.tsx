'use client';

import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const className = 'join-item btn bg-fi-100 hover:bg-fi-300 btn-xs ';

  return (
    <div className="join flex flex-wrap w-full justify-center py-4">
      <Link className={className + (currentPage === 1 ? ' btn-disabled' : '')} href={createPageURL(1)}>
        <ChevronDoubleLeftIcon className="h-3" />
      </Link>
      <Link className={className + (currentPage === 1 ? ' btn-disabled' : '')} href={createPageURL(currentPage - 1)}>
        <ChevronLeftIcon className="h-3" />
      </Link>
      {Array.from(Array(totalPages).keys()).map((_, i) => (
        <Link key={i} className={className + (currentPage === i + 1 && 'bg-fi-300')} href={createPageURL(i + 1)}>
          {i + 1}
        </Link>
      ))}
      <Link
        className={className + (currentPage === totalPages || totalPages === 0 ? ' btn-disabled' : '')}
        href={createPageURL(currentPage + 1)}
      >
        <ChevronRightIcon className="h-3" />
      </Link>
      <Link
        className={className + (currentPage === totalPages || totalPages === 0 ? ' btn-disabled' : '')}
        href={createPageURL(totalPages)}
      >
        <ChevronDoubleRightIcon className="h-3" />
      </Link>
    </div>
  );
}
