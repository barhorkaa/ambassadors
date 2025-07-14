import DateSearch from '@/app/ui/search/date-search';
import Pagination from '@/app/ui/search/pagination';
import Search from '@/app/ui/search/search';
import { TableSkeleton } from '@/app/ui/utils/skeletons';
import { Suspense } from 'react';

interface SearchPaginationProps {
  totalPages: number;
  query: string;
  currentPage: number;
  title?: string;
  placeHolder: string;
  includeDateSearch: boolean;
  dateFrom?: Date;
  dateTo?: Date;
  children?: React.ReactNode;
}

const SearchPaginationLayout = (props: SearchPaginationProps) => (
  <>
    <h2 className="pb-2">{props.title}</h2>
    <div className="flex flex-col md:flex-row gap-4 md:gap-2">
      <Search placeholder={props.placeHolder} />
      {props.includeDateSearch && <DateSearch />}
    </div>
    <Pagination totalPages={props.totalPages} />
    <Suspense
      key={
        props.includeDateSearch
          ? props.query + props.currentPage + props.dateFrom + props.dateTo
          : props.query + props.currentPage
      }
      fallback={<TableSkeleton />}
    >
      {props.children}
    </Suspense>
    <Pagination totalPages={props.totalPages} />
  </>
);

export default SearchPaginationLayout;
