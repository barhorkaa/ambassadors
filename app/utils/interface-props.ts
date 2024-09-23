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
