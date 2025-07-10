import { BaseLayoutProps } from '@/app/utils/interface-props';

export default function Layout({ children }: BaseLayoutProps) {
  return <div className="content">{children}</div>;
}
