'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function DateSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleDateFrom = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');

    if (term) {
      params.set('dateFrom', term);
    } else {
      params.delete('dateFrom');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleDateTo = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');

    if (term) {
      params.set('dateTo', term);
    } else {
      params.delete('dateTo');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="flex flex-row gap-2">
      <input
        type="date"
        className="input"
        onChange={(e) => {
          handleDateFrom(e.target.value);
        }}
        defaultValue={searchParams.get('dateFrom')?.toString()}
      />
      <input
        type="date"
        className="input"
        onChange={(e) => {
          handleDateTo(e.target.value);
        }}
        defaultValue={searchParams.get('dateTo')?.toString()}
      />
    </div>
  );
}
