export interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export interface BaseLayoutProps {
  children: React.ReactNode;
}
