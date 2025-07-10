import { BaseLayoutProps } from '@/app/utils/interface-props';

interface LayoutProps {
  motivation: React.ReactNode;
  user: React.ReactNode;
}

export default async function Layout({ children, motivation, user }: BaseLayoutProps & LayoutProps) {
  return (
    <div className="grid grid-cols-1 grid-rows-[min-content_min-content] md:grid-cols-2 md:grid-rows-1 gap-4 md:px-6">
      {user}
      {motivation}
      {children}
    </div>
  );
}
