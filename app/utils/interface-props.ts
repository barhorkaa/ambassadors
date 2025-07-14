export interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export interface BaseLayoutProps {
  children: React.ReactNode;
}

export interface FormLayoutProps {
  children: React.ReactNode;
  form: React.ReactNode;
}

export interface BasePageSearchProps {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}

export interface DatePageSearchProps {
  searchParams?: Promise<{
    dateFrom?: string;
    dateTo?: string;
  }>;
}
